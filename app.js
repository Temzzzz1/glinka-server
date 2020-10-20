require('dotenv').config()

const express  = require('express')
const mongoose = require('mongoose')
const path = require('path')
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
        // Connect to MongoDB
        await mongoose.connect(
            'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@cluster0.rlbbl.mongodb.net/'+process.env.DB_NAME, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }).then(console.log('Database connected...'))
        

        // Start server
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })

    } catch (e) {
        console.log(e)
    }
}

start()