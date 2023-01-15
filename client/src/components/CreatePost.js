import React, { useState} from 'react';
import { Button, Col, Input, Row } from 'antd';
import {createPost} from "../http/postAPI";

const CreatePost = ({user, onRefresh}) => {
    const [post, setPost] = useState("");
    const {id} = user;

    const handleCreatePost = async () => {
        const formData = new FormData();
        formData.append('text', post);
        formData.append('userName', user.name);
        formData.append('userId', id);
        try {
            if(post.length !== 0) {
                await createPost(formData);
                setPost("");
                onRefresh();
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Row>
            <Col
                xs={{span: 22, offset: 1}}
                sm={{span: 21, offset: 1}}
                md={{span: 21, offset: 1}}
                lg={{span: 21, offset: 1}}
            >
                <Input.TextArea
                    style={{marginTop: "25px", fontSize: "20px"}}
                    rows={3}
                    placeholder="Write a post"
                    maxLength={10000}
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />

                <Button
                    type="primary"
                    size="large"
                    className="page-btn"
                    style={{marginTop: "25px", marginBottom: "25px"}}
                    onClick={handleCreatePost}
                >
                    Create post
                </Button>
            </Col>
        </Row>
    )
}

export default CreatePost;