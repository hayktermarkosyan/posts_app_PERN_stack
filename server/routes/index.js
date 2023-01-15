const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const likeRouter = require('./likeRouter')
const commentRouter = require('./commentRouter')
const savedPostRouter = require('./savedPostRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/like', likeRouter)
router.use('/comment', commentRouter)
router.use('/saved-post', savedPostRouter)

module.exports = router