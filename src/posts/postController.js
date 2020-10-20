const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

module.exports.addPost = async (req, res) => {
    if (req.files.image) {
        cloudinary.uploader.upload(req.files.image.path, {
            'folder': 'glinka/portfolio',
            'crop': 'limit',
            'tags': 'samples',
            'width': 3000,
            'height': 2000
        }, (error, result) => {
            if (error) res.json({isSent: false, error});
            else res.json({isSent: true, result});
        });
    }
}