const {Like} = require('../models/models')
const ApiError = require('../error/ApiError')

class LikeController {
    async create(req, res) {
        const {userName, userImg, userEmail, userId, postId} = req.body
        const like = await Like.create({userName, userImg, userEmail, userId, postId})
        return res.json(like)
    }

    async delete(req, res) {
        const {postId} = req.body
        await Like.destroy({
            where: { postId },
        })
        return res.json()
    }

    async getAll(req, res) {
        const likes = await Like.findAll()
        return res.json(likes)
    }
}

module.exports = new LikeController()