
module.exports.loginToPanel = (req, res) => {
    if (req.body.login == process.env.PANEL_USER && req.body.psw == process.env.PANEL_PASSWORD) {
        res.json({ isLoginSuccess: true })
    }
}