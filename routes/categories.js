const express = require('express');

// const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');
const categoriesControler = require('../controllers/categoriesControler');

const router = express.Router();

router.post('/', authMiddleware, categoriesControler.insertCategory);

router.get('/', authMiddleware, categoriesControler.getAllCategories);

module.exports = router;
