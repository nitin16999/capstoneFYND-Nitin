const Admin = require('../model/admin.model');

//GET method for retrieving a specific Admin Data using unique email ID(Complete)
const getAdmin = async (req, res) => {
  const email = req.params.email;
  console.log(email)
  res.send(JSON.stringify(await Admin.find({email})));
};

//POST method to add a new Admin(Normal)
const addAdmin = async (req, res) => {
  const adminData = {
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    password: req.body.password,
  };
  const admin = new Admin(adminData);
  try {
    await admin.save().then((data) => {
      res.send(JSON.stringify({ msg: 'Record Added!', data: data }));
    });
  } catch (err) {
    res.send(JSON.stringify({ err }));
  }
};

//

module.exports = {
  getAdmin,
  addAdmin,
};
