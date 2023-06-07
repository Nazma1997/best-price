const mongoose = require('mongoose');
const connectDatabase = () => {
    const mongodb_uri = `mongodb+srv://social-media:iw2IRanJs8WDhqOM@cluster0.fvbuak0.mongodb.net/e-commerce?retryWrites=true&w=majority`
    try {
        mongoose.connect(mongodb_uri)
        mongoose.connection.on('connected', () => {
            console.log('connected to DB')
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDatabase;