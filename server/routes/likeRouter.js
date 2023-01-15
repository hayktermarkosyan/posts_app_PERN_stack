const Router = require('express')
const router = new Router()
const likeController = require('../controllers/likeController')

router.post('/', likeController.create)
router.delete('/', likeController.delete)
router.get('/', likeController.getAll)

module.exports = router