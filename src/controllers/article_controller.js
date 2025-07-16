const Article = require("../model/article_model");



exports.findAll = async (req, res) => {
    try {
        const data = await Article.getAllArticles();
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const data = await Article.getArticleById(req.params.id);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// module.exports = { findAll, create }

