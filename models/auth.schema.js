const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
 username: {
    type: String
 },
 email: {
    type: String
 },
 password: {
    type: String
 }
});

const userModel = mongoose.model('User', User);
module.exports = userModel