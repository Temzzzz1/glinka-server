
const ig = require('instagram-scraping')

module.exports.showInstagramPosts = (req, res) => {
    ig.scrapeUserPage('aee.glinka').then(result => {
        postsURL = []
        for (let index = 0; index < 5; index++) {
            postsURL.push(result.medias[index]['thumbnail'])
        }
        console.log(postsURL)
      });

    res.json(postsURL)
}