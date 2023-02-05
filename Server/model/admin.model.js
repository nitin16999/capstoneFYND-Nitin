const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name must be Provided!'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'E-Mail must be Provided!'],
      unique: true,
      trim: true
    },
    phoneNo: {
      type: String,
      required: [true, 'Phone Number must be Provided!'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password must be Provided!'],
      trim: true
    },
    masterAdmin: {
      type: Boolean,
      required: [false, 'Admin Status must be Provided!'],
      default: false
    },
  },
  { collection: 'Admin' }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
