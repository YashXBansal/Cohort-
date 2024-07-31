
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.Mongo_URL)
  .then(console.log("MongoDB Connected!"))
  .catch((err) => {
    console.log("Error connecting to Database", err);
  });

  const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    Password: {
        type: String,
        required: true,
        minLength: 6
    },
    FirstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', userSchema);


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
	User,Account
}