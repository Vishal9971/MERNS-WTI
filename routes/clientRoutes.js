const express = require('express');
const Client = require('../model/Client');
const router = express.Router();

router.get('/', async (req, res) => {
  let allClients = await Client.find({});
  res.render('index', { allClients });
});

router.post('/', async (req, res) => {
  let { firstname, lastname, email, number, project } = req.body;
  await Client.create({ firstname, lastname, email, number, project });
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  let { id } = req.params;
  let foundClient = await Client.findById(id);
  res.render('edit', { foundClient });
});

router.patch('/edit/:id', async (req, res) => {
  let { firstname, lastname, email, number, project } = req.body;
  let { id } = req.params;
  await Client.findByIdAndUpdate(id, { firstname, lastname, email, number, project });
  res.redirect('/');
});

router.delete('/delete/:id', async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await Client.findByIdAndDelete(id, {});
  res.redirect('/');
});

module.exports = router;
