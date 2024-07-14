const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const getAllDishesRoutes = require("./routes/getAllDishes.route");
const toggleRublishRoutes = require("./routes/togglePublish.route");
dotenv.config();

const app = express();
const port = 5000;

const corsOptions = {
    origin: '*',
  };

mongoose.connect(process.env.MONGODB_URI).then( () => {
    console.log('Connected to MongoDB!');
  }).catch( (error) => {
    console.log('Unable to connect to MongoDB');
    console.log(error);
});;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/dishes', getAllDishesRoutes);
app.use('/api/dishes', toggleRublishRoutes);

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});