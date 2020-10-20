require('dotenv').config()

const express  = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const formData = require('express-form-data');


const PORT = process.env.PORT || 6080

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(formData.parse());

// Routes
const adminRoute = require('./src/admin/adminRoute')
const postRoute = require('./src/posts/postRoute')
const welcomeRoute = require('./src/welcome/welcomeRoute')
const contactRoute = require('./src/contact/ContactRoute')

app.use(welcomeRoute)
app.use(adminRoute)
app.use(postRoute)
app.use(contactRoute)

async function start() {
    try {
        // Start server
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })

    } catch (e) {
        console.log(e)
    }
}

start()