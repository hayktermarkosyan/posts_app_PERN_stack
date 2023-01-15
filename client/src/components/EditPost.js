import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {editPost} from "../http/postAPI";

const EditPost = ({post, onRefresh}) => {
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [editPostText, setEditPostText] = useState("");

    const onEditBtnClick = (text) => {
        setVisibleEdit(true);
        setEditPostText(text)
    }

    const onOkBtnClick = async () => {
        try {
            await editPost(editPostText, post.id);
        } catch (error) {
            alert(error);
        }
        onRefresh();
        setVisibleEdit(false);
    }

    return (
        <>
            <Button
                className="post-edit"
                onClick={() => onEditBtnClick(post.text)}
            >
                <EditOutlined title='Click to edit post' style={{fontSize: "larger"}} />
            </Button>

            <Modal
                title="Edit Post"
                open={visibleEdit}
                onOk={onOkBtnClick}
                onCancel={() => setVisibleEdit(false)}
                okText="Edit"
                width={1000}
            >
                <Input.TextArea
                    style={{fontSize: "20px", width: 1000}}
                    rows={10}
                    placeholder="Write a post"
                    maxLength={1000}
                    value={editPostText}
                    onChange={(e) => setEditPostText(e.target.value)}
                />
            </Modal>
        </>
    )
}

export default EditPost;