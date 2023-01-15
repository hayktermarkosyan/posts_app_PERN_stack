// noinspection JSUnresolvedVariable

const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    phoneNum: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
})

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING
    }
})

const Like = sequelize.define('like', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING
    },
    userImg: {
        type: DataTypes.STRING
    },
    userEmail: {
        type: DataTypes.STRING
    }
})

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING
    },
    userImg: {
        type: DataTypes.STRING
    }
})

const SavedPost = sequelize.define('saved_post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING
    },
})

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

User.hasMany(SavedPost)
SavedPost.belongsTo(User)

Post.hasMany(Like)
Like.belongsTo(Post)

Post.hasMany(Comment)
Comment.belongsTo(Post)

SavedPost.belongsTo(Post)

// Like.belongsToMany(Comment, {through: LikeComment})
// Comment.belongsToMany(Like, {through: LikeComment})

module.exports = {
    User, Post, Like, Comment, SavedPost
}