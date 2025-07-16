const express = require('express');
const articleController = require('../controllers/article_controller');
const router = express.Router();


router.get('/', articleController.findAll);
// router.get('/:id', articleController.getArticleById);

module.exports = router;
