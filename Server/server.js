const express = require('express');
const serverData = require('./const.info');
const PORT = serverData.constInfo.express.PORT;
const connectDB = require('./Utility/mongoDbCon.utility');

//importing the routes
const adminRoute = require('./routes/admin.route');
const barberRoute = require('./routes/barber.route');

const app = express();

app.use(express.json());
app.use(adminRoute);
app.use(barberRoute);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is Running Fine! on Port Number ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
