import React from 'react';
import { Button } from 'antd';
import { SaveFilled, SaveOutlined } from '@ant-design/icons';
import {createSavedPost, deleteSavedPost} from "../http/postAPI";

const SavePost = ({post, user, savedPosts, onRefresh}) => {

    const savePost = async () => {
        const formData = new FormData();
        formData.append('text', post.text);
        formData.append('userName', post.userName);
        formData.append('userId', user.id);
        formData.append('postId', post.id);
        try {
            if(savedPosts.length === 0) {
                await createSavedPost(formData);
                onRefresh();
            } else {
                await deleteSavedPost(savedPosts[0].postId);
                onRefresh();
            }

        } catch (error) {
            alert(error);
        }
    }

    return (
        <Button
            className="post-saved"
            onClick={savePost}
        >
            {savedPosts.length !== 0 ?
                <SaveFilled title='Click to unsave post' style={{fontSize: "larger"}} /> :
                <SaveOutlined title='Click to save post' style={{fontSize: "larger"}} />
            }


        </Button>
    )
}

export default SavePost;