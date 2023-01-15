const Router = require('express')
const router = new Router()
const postController = require('../controllers/postController')

router.post('/', postController.create)
router.put('/:id', postController.update)
router.delete('/', postController.delete)
router.get('/', postController.getAll)

module.exports = router