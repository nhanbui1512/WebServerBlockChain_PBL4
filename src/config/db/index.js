const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nhanbui1512:nhanbui00399@cluster0.byylynh.mongodb.net/nguongocnongsan_dev' ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfully !!!')
    } catch (error) {
        console.log('Connect Fail !!!')
    }
}
module.exports = { connect };