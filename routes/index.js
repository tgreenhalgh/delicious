const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// object descturcturing - only take the catchErrors method
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
