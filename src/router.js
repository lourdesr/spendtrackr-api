const express = require('express');

const router = express.Router();

const joiValidateMiddleware = require('./services/validator/joi-validator.middleware');

const {
  listStoreByIdValidator,
} = require('./stores/stores.validator');

const {
  listAllStores,
  listStoreById,
} = require('./stores/stores.controller');

// stores router
router.get('/stores', listAllStores);
router.get('/stores/:id', joiValidateMiddleware(listStoreByIdValidator), listStoreById);
router.put('/stores/:id', (req, res) => {
  res.send('Not implemented');
});
router.post('/stores', (req, res) => {
  res.send('Not implemented');
});
router.delete('/stores/:id', (req, res) => {
  res.send('Not implemented');
});

// main_category router
router.get('/main/category', (req, res) => {
  res.send('Not implemented');
});
router.get('/main/category/:id', (req, res) => {
  res.send('Not implemented');
});
router.put('/main/category/:id', (req, res) => {
  res.send('Not implemented');
});
router.post('/main/category', (req, res) => {
  res.send('Not implemented');
});
router.delete('/main/category/:id', (req, res) => {
  res.send('Not implemented');
});

// sub_category router
router.get('/sub/category', (req, res) => {
  res.send('Not implemented');
});
router.get('/sub/category/:id', (req, res) => {
  res.send('Not implemented');
});
router.put('/sub/category/:id', (req, res) => {
  res.send('Not implemented');
});
router.post('/sub/category', (req, res) => {
  res.send('Not implemented');
});
router.delete('/sub/category/:id', (req, res) => {
  res.send('Not implemented');
});

// spending router
router.get('/spending', (req, res) => {
  res.send('Not implemented');
});
router.get('/spending/:uuid', (req, res) => {
  res.send('Not implemented');
});
router.put('/spending/:uuid', (req, res) => {
  res.send('Not implemented');
});
router.post('/spending', (req, res) => {
  res.send('Not implemented');
});
router.delete('/spending/:uuid', (req, res) => {
  res.send('Not implemented');
});

module.exports = router;
