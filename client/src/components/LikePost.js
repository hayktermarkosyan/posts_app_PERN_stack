import React from 'react';
import {Button, Dropdown, Space, Col} from 'antd';
import {HeartFilled, HeartOutlined} from '@ant-design/icons';
import unknownUser from "../images/unknown_user.png"
import {createLike, deleteLike} from "../http/postAPI";

const LikePost = ({post, likes, user, onRefresh}) => {

    const items = likes.map(like => {
        return {
            label: (
                <Col className="reaction-user-name">
                    <div>{like.userName}</div>
                </Col>
            ),
            key: like.id,
            icon: like.userImg ?
                <Col>
                    <img
                        alt={like.userName}
                        src={process.env.REACT_APP_API_URL + like.userImg}
                        className="reaction-image"
                    />
                </Col>
                     :
                <Col>
                    <img
                        alt={like.userName}
                        src={unknownUser}
                        className="reaction-image"
                    />
                </Col>
        }
    })

    const likeMenuProps = {
        items,
    }

    const handleLikePost = async () => {
        if(user === null) {
            return;
        }
        const formData = new FormData();
        formData.append('userName', user.name);
        formData.append('userImg', user.img);
        formData.append('userEmail', user.email);
        formData.append('userId', user.id);
        formData.append('postId', post.id);
        try {
            if(likes.find(like => like.userId === user.id)) {
                await deleteLike(likes.find(like => like.userId === user.id).postId)
                onRefresh();
            } else {
                await createLike(formData);
                onRefresh();
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <Button
                className="post-reaction"
                onClick={handleLikePost}
            >
                {user && likes.some(like => like.userId === user.id) ?
                    <HeartFilled style={{fontSize: "larger"}} /> :
                    <HeartOutlined style={{fontSize: "larger"}} />}

            </Button>
            <Dropdown
                menu={likeMenuProps}
                className="post-reaction-users-number"
            >
                <a href='.' onClick={e => e.preventDefault()}>
                    <Space>
                        {likes.length ? likes.length : null}
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default LikePost;