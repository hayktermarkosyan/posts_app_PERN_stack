import React from 'react';
import {Col, Divider, Row} from 'antd';
import EditPost from '../components/EditPost';
import LikePost from '../components/LikePost';
import DeletePost from '../components/DeletePost';
import CreatePost from '../components/CreatePost';
import CreateComment from '../components/CreateComment';
import Comments from '../components/Comments';
import SavePost from '../components/SavePost';

const Posts = ({users, user, posts, onRefresh}) => {

    return (
        <Col
            span={20} xs={{offset: 4}} sm={{offset: 2}} lg={{offset: 1}}
            align="center" style={{fontSize: "40px"}}
        >
            Posts
            {posts.post.length !== 0 ?
                <Row
                    style={{marginTop: "25px", fontSize: "16px"}}
                    justify="start"
                >
                    {posts.post.map(post => (
                        <Col xs={22} sm={22} md={22} lg={22} key={post.id} className="post-place">
                            <div className="post-text">{post.text}</div>

                            {(user !== null && post.userId === user.id) &&
                            <DeletePost
                                post={post}
                                likes={posts.like.filter(l => l.postId === post.id)}
                                comments={posts.comment.filter(com => com.postId === post.id)}
                                savedPosts={posts.saved_post.filter(s => s.postId === post.id)}
                                onRefresh={onRefresh} />
                            }

                            <Divider />

                            {posts.comment.length !== 0 &&
                            <Comments
                                post={post}
                                comments={posts.comment.filter(com => com.postId === post.id)}
                            />
                            }

                            {user.email && <CreateComment post={post} user={user} onRefresh={onRefresh} />}

                            {(user !== null && post.userId === user.id) && <EditPost post={post} onRefresh={onRefresh} />}

                            {user.email && <LikePost
                                                post={post}
                                                user={user}
                                                likes={posts.like.filter(l => l.postId === post.id)}
                                                onRefresh={onRefresh}
                                            />
                            }

                            {user.email &&
                            <SavePost
                                post={post}
                                user={user}
                                savedPosts={posts.saved_post.filter(s => s.postId === post.id && s.userId === user.id)}
                                onRefresh={onRefresh}
                            />
                            }

                            <div className="post-author">
                                Created by: {users.filter(u => u.id === post.userId)[0].name}
                            </div>
                        </Col>
                    ))
                    }
                </Row> :
                <p
                    style={{marginTop: "50px", fontSize: "large"}}
                >
                    Posts not created yet
                </p>
            }

            {user.id && <CreatePost onRefresh={onRefresh} user={user} />}
        </Col>
    )
}

export default Posts;