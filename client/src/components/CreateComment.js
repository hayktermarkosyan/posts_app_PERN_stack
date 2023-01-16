import { Button, Col, Input } from 'antd';
import React, { useState } from 'react';
import { CommentOutlined } from '@ant-design/icons';
import {createComment} from "../http/postAPI";

const CreateComment = ({post, user, onRefresh}) => {
    const [comment, setComment] = useState('');

    const handleCreateComment = async () => {
        const formData = new FormData();
        formData.append('text', comment);
        formData.append('userName', user.name);
        formData.append('userImg', user.img);
        formData.append('userId', user.id);
        formData.append('postId', post.id);
        try {
            if(comment.length !== 0) {
                await createComment(formData)
                setComment('');
                onRefresh();
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Col xs={12} sm={13} md={16} lg={18}>
            <Input.TextArea
                style={{fontSize: "small"}}
                rows={1}
                placeholder="Write a comment"
                maxLength={1000}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Button
                onClick={handleCreateComment}
                className="post-comment"
            >
                <CommentOutlined style={{fontSize: "larger"}} />
            </Button>
        </Col>
    )
}

export default CreateComment;