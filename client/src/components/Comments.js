import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
import unknownUser from "../images/unknown_user.png";

const Comments = ({post, comments}) => {
    const [visible, setVisible] = useState(false);

    return (
        <Col xs={12} sm={13} md={16} lg={18}>
            {comments.length !== 0 && !visible && (
                <Row justify="center">
                    <Col span={2}>
                        {comments[0].userImg ?
                            <img
                                alt={comments[0].userId}
                                src={process.env.REACT_APP_API_URL + comments[0].userImg}
                                className="comment-image"
                            /> :
                            <img
                                alt={comments[0].userName}
                                src={unknownUser}
                                className="comment-image"
                            />
                        }
                    </Col>
                    <Col span={22} className="comment-place">
                        <div>{comments[0].userName}</div>
                        <div style={{fontWeight: "600"}}>{comments[0].text}</div>
                    </Col>
                </Row>
            )
            }

            {comments.length > 1 &&
            (!visible ?
                    <Button
                        onClick={() => setVisible(true)}
                        className="all-comments"
                    >
                        View all
                    </Button> :
                    <>
                        {comments.map(com => (
                            <Row key={com.id} justify="center">
                                {post.id === com.postId &&
                                <>
                                    <Col span={2}>
                                        {com.userImg ?
                                            <img
                                                alt={com.userName}
                                                src={process.env.REACT_APP_API_URL + com.userImg}
                                                className="comment-image"
                                            /> :
                                            <img
                                                alt={com.userName}
                                                src={unknownUser}
                                                className="comment-image"
                                            />
                                        }
                                    </Col>
                                    <Col span={22} className="comment-place">
                                        <div>{com.userName}</div>
                                        <div style={{fontWeight: "600"}}>{com.text}</div>
                                    </Col>
                                </>
                                }
                            </Row>
                        ))}
                        <Button
                            onClick={() => setVisible(false)}
                            className="all-comments"
                        >
                            Hide
                        </Button>
                    </>
            )
            }
        </Col>
    )
}

export default Comments;