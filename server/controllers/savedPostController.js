const {SavedPost} = require('../models/models')

class SavedPostController {
    async create(req, res) {
        const {text, userName, userId, postId} = req.body
        const savedPost = await SavedPost.create({text, userName, userId, postId})
        return res.json(savedPost)
    }

    async delete(req, res) {
        const {postId} = req.body
        await SavedPost.destroy({
            where: { postId },
        })
        return res.json()
    }

    async getAll(req, res) {
        const savedPosts = await SavedPost.findAll()
        return res.json(savedPosts)
    }
}

module.exports = new SavedPostController()