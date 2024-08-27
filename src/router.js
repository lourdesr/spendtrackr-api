const express = require('express');

const router = express.Router();

const { listAllStores } = require('./stores/stores.controller');

router.get('/stores', listAllStores);

module.exports = router;
