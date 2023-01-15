import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this._comments = []
        this._likes = []
        this._saved_posts = []
        this._posts = []
        makeAutoObservable(this)
    }

    setComment(comment) {
        this._comments = comment
    }

    setLike(like) {
        this._likes = like
    }

    setSavedPost(saved_post) {
        this._saved_posts = saved_post
    }

    setPost(post) {
        this._posts = post
    }

    get comment() {
        return this._comments
    }

    get like() {
        return this._likes
    }

    get saved_post() {
        return this._saved_posts
    }

    get post() {
        return this._posts
    }
}