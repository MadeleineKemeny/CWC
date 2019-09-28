const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['Admin', 'User', 'Producer'],
        default: 'User'
    },
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: String,
    vineyardFullname: String    
})

userSchema.methods = {
    hashPassword: plainText => {
        return bcrypt.hashSync(plainText, 10)
    },
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('========= NO PASSWORD PROVIDED =========');
        next();
    }
    else {
        this.password = this.hashPassword(this.password);
        next();
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;