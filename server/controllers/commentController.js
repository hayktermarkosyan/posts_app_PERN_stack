const {Comment} = require('../models/models')
const ApiError = require('../error/ApiError')

class CommentController {
    async create(req, res) {
        const {text, userName, userImg, userId, postId} = req.body
        const comment = await Comment.create({text, userName, userImg, userId, postId})
        return res.json(comment)
    }

    async delete(req, res) {
        const {postId} = req.body
        await Comment.destroy({
            where: { postId },
        })
        return res.json()
    }

    async getAll(req, res) {
        const comments = await Comment.findAll()
        return res.json(comments)
    }
}

module.exports = new CommentController()