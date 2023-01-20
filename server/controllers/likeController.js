const {Like} = require('../models/models')

class LikeController {
    async create(req, res) {
        const {userName, userImg, userEmail, userId, postId} = req.body
        const like = await Like.create({userName, userImg, userEmail, userId, postId})
        return res.json(like)
    }

    async delete(req, res) {
        const {id} = req.body
        await Like.destroy({
            where: { id },
        })
        return res.json()
    }

    async getAll(req, res) {
        const likes = await Like.findAll()
        return res.json(likes)
    }
}

module.exports = new LikeController()