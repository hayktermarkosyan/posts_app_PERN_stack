const {Post} = require('../models/models')

class PostController {
    async create(req, res) {
        const {text, userName, userId} = req.body
        const post = await Post.create({text, userName, userId})
        return res.json(post)
    }

    async delete(req, res) {
        const {id} = req.body
        await Post.destroy({
            where: { id },
        })
        return res.json()
    }

    async update(req, res) {
        const {text} = req.body
        const {id} = req.params
        const post = await Post.update({ text }, { where: { id }})
        return res.json(post)
    }

    async getAll(req, res) {
        const posts = await Post.findAll()
        return res.json(posts)
    }
}

module.exports = new PostController()