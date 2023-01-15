const Router = require('express')
const router = new Router()
const savedPostController = require('../controllers/savedPostController')

router.post('/', savedPostController.create)
router.delete('/', savedPostController.delete)
router.get('/', savedPostController.getAll)

module.exports = router