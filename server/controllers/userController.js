// noinspection NodeCoreCodingAssistance

const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Wrong email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong password'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }

    async update(req, res) {
        const {name, phoneNum} = req.body
        const {id} = req.params
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        await img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const user = await User.update({ name, phoneNum, img: fileName }, { where: {id}})
        return res.json(user)
    }

    async getAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }

    async getOne(req, res) {
        const {id} = req.params
        const user = await User.findOne({ where: { id }})
        return res.json(user)
    }
}

module.exports = new UserController()