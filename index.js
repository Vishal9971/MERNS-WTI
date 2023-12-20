const express = require('express');
const app = express();
const path = require('path');
const seedDB = require('./seeds');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/mernAss')
  .then(() => {
    console.log('db connected');
  })
  .catch((e) => {
    console.log('db not connected', e);
  });
const clientRoutes = require('./routes/clientRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

seedDB();
app.use(clientRoutes);

const PORT = 8080;
app.listen(PORT, (req, res) => {
  console.log(`server connected at ${PORT}`);
});
