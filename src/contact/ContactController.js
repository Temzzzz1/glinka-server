const easyvk = require('easyvk')

module.exports.sendMessage = async (req, res) => {

    easyvk({
        utils: {
            longpoll: true
        },
        token: process.env.VK_TOKEN
    }).then(vk => {
        vk.call('messages.send', {
            peer_id: '341044133',
            message: 'NEW LETTER!\nFrom: ' + req.body.name + '\nEmail: ' + req.body.email
                + '\n\nMessage: ' + req.body.message,
            random_id: easyvk.randomId()
        });
        res.json({ isSent: true })
    }).catch(err => {
        res.json({ isSent: false, err })
    })


}