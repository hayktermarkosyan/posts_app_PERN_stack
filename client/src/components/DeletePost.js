import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {deleteComment, deleteLike, deletePost, deleteSavedPost} from "../http/postAPI";

const DeletePost = ({post, likes, comments, savedPosts, onRefresh}) => {

    const handleDeletePost = async () => {
        try {
            if (likes.length > 0) likes.map(async (like) => await deleteLike(like.postId));
            if (savedPosts.length > 0) savedPosts.map(async (sPost) => await deleteSavedPost(sPost.postId));
            if (comments.length > 0) comments.map(async (com) => await deleteComment(com.postId));

            await deletePost(post.id);
            onRefresh();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Button
            className="post-delete"
            onClick={handleDeletePost}
        >
            <CloseCircleOutlined title='Click to delete post' style={{fontSize: "larger"}} />
        </Button>
    )
}

export default DeletePost;