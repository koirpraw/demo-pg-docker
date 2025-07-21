const express = require('express');
const articleController = require('../controllers/article_controller');
const router = express.Router();


router.get('/', articleController.findAll);
router.get('/:id', articleController.findById); // Fixed: changed from getArticleById to findById


module.exports = router;
