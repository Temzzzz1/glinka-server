const Posts = require('./postModel')
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
  });

module.exports.showPosts = async (req, res) => {
    res.json(await Posts.find({}).lean())
}



module.exports.addPost = async (req, res) => {

    if (req.image) {
        cloudinary.uploader.upload(req.image, {
            'crop': 'limit',
            'tags': 'samples',
            'width': 3000,
            'height': 2000
        }, (result) => console.log(result) );
    }

    if (req.secureToken == process.env.SECURE_TOKEN) {
        const post = new Posts({ 
            title: req.title,
            imageUrl: req.imageUrl
         });
     
        
        post.save(function (err) {
          if (err) return res.json({isError: err})
        });

        res.end()
    } else {
        res.sendStatus(500)
    }
    
}