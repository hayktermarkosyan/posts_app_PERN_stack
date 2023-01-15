import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {deleteSavedPost} from "../http/postAPI";

const DeleteSavedPost = ({savedPost, onRefresh}) => {

    const deletePost = async () => {
        try {
            await deleteSavedPost(savedPost.postId);
            onRefresh();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Button
            className="post-delete"
            onClick={deletePost}
        >
            <CloseCircleOutlined title='Click to unsave post' style={{fontSize: "larger"}} />
        </Button>
    )
}

export default DeleteSavedPost;