
const ig = require('instagram-scraping')

module.exports.showInstagramPosts = (req, res) => {

    ig.scrapeUserPage('rusanov.tema').then(result => {
        console.log(result)
        postsURL = []
        for (let index = 0; index < 5; index++) {
            postsURL.push(result.medias[index]['thumbnail'])
        }
        res.json(result)

      });

   
}