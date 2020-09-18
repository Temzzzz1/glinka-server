require('dotenv').config()

const express  = require('express')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 3000

// Routes
const adminRoute = require('./src/admin/adminRoute')
const postRoute = require('./src/posts/postRoute')

app.use(adminRoute)
app.use(postRoute)

const app = express();

app.use(express.urlencoded({ extended: true}))



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