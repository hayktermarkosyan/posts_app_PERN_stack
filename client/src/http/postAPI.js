import {$authHost, $host} from "./index";

export const createComment = async (comment) => {
    const {data} = await $authHost.post('api/comment', comment)
    return data
}

export const fetchComments = async () => {
    const {data} = await $host.get('api/comment')
    return data
}

export const deleteComment = async (postId) => {
    const {data} = await $authHost.delete('api/comment', {data: { postId }})
    return data
}

export const createLike = async (like) => {
    const {data} = await $authHost.post('api/like', like)
    return data
}

export const deleteLike = async (id) => {
    const {data} = await $authHost.delete('api/like', {data: { id }})
    return data
}

export const fetchLikes = async () => {
    const {data} = await $host.get('api/like')
    return data
}

export const createSavedPost = async (saved_post) => {
    const {data} = await $authHost.post('api/saved-post', saved_post)
    return data
}

export const deleteSavedPost = async (postId) => {
    const {data} = await $authHost.delete('api/saved-post', {data: { postId }})
    return data
}

export const fetchSavedPosts = async () => {
    const {data} = await $host.get('api/saved-post')
    return data
}

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/post', post)
    return data
}

export const deletePost = async (id) => {
    const {data} = await $authHost.delete('api/post', {data: { id }})
    return data
}

export const editPost = async (text, id) => {
    const {data} = await $authHost.put('api/post/' + id, { text })
    return data
}

export const fetchPosts = async () => {
    const {data} = await $host.get('api/post')
    return data
}

// export const fetchOnePost = async (id) => {
//     const {data} = await $host.get('api/post/' + id)
//     return data
// }