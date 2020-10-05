
const ig = require('instagram-scraping')

module.exports.showInstagramPosts = (req, res) => {

    postsURL = []
    postsURL = ig.scrapeUserPage('aee.glinka').then(result => {
        
        for (let index = 0; index < 5; index++) {
            postsURL.push(result.medias[index]['thumbnail'])
        }
      });

    res.json(postsURL)
}