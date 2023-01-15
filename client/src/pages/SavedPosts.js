// noinspection ES6CheckImport

import React, { useState } from 'react';
import { Col, Row, Divider, Modal } from 'antd';
import DeleteSavedPost from '../components/DeleteSavedPost';

const SavedPosts = ({savedPosts, onRefresh}) => {
    const [visible, setVisible] = useState(false);
    const [postText, setPostText] = useState();

    const onPostClick = (text) => {
        setVisible(true);
        setPostText(text);
    }

    return (
        <>
            <Col
                span={20} xs={{offset: 4}} sm={{offset: 2}} lg={{offset: 1}}
                align="center" style={{fontSize: "40px"}}
            >
                Saved Posts
                {savedPosts.length !== 0 ? (
                    <Row
                        style={{marginTop: "25px", fontSize: "16px"}}
                        justify="start"
                    >
                        {savedPosts.map(s_post => (
                            <Col
                                xs={22} sm={22} md={22} lg={22}
                                key={s_post.id}
                                className="post-place"
                            >
                                <div
                                    className="saved-post-text"
                                    title='Click to read post'
                                    onClick={() => onPostClick(s_post.text)}
                                >
                                    {s_post.text}
                                </div>

                                <Divider />

                                <DeleteSavedPost savedPost={s_post} onRefresh={onRefresh} />

                                <div className="post-author">
                                    Created by: {s_post.userName}
                                </div>
                            </Col>
                        ))
                        }
                    </Row>
                ) : (
                    <p
                        style={{marginTop: "50px", fontSize: "large"}}
                    >
                        You don't have any saved posts
                    </p>
                )
                }
            </Col>
            <Modal
                title="Read Post"
                open={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                okText="Close"
                width={1200}

            >
                <div style={{fontSize: "26px"}}>{postText}</div>
            </Modal>
        </>
    )
}

export default SavedPosts;