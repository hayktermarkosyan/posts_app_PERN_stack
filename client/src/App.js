// noinspection ES6CheckImport

import { Layout, Row } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import SavedPosts from "./pages/SavedPosts";
import Loading from "./components/Loading";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {check, fetchUser, fetchUsers} from "./http/userAPI";
import {fetchComments, fetchLikes, fetchPosts, fetchSavedPosts} from "./http/postAPI";

const App = observer(({user, posts}) => {
    const [loading, setLoading] = useState(true);
    const [pageRefresh, setPageRefresh] = useState(false);
    const [allUsers, setAllUsers] = useState([])

    const onRefresh = () => setPageRefresh(!pageRefresh);

    useEffect(() => {
        check().then((data) => {
            user.setUser(data);
            user.setIsAuth(true);
            fetchUser(data.id).then(data => {
                user.setUser(data);
            })
        }).finally(() => setLoading(false))
        fetchPosts().then(data => {
            posts.setPost(data);
        })
        fetchComments().then(data => {
            posts.setComment(data);
        })
        fetchLikes().then(data => {
            posts.setLike(data);
        })
        fetchSavedPosts().then(data => {
            posts.setSavedPost(data);
        })
        fetchUsers().then(data => {
            setAllUsers(data);
        })
    }, [posts, user, pageRefresh])

    if(loading) {
        return (
            <Row justify="center" align="middle">
                <Loading marginTop="200px" />
            </Row>
        )
    }

    return (
      <Layout hasSider style={{backgroundColor: "white"}}>
          <Layout.Sider theme="light" width="80" className="sider">
              <Navigation user={user} />
          </Layout.Sider>

          <Layout style={{backgroundColor: "white", marginTop: "20px"}}>
              <Layout.Content>
                  <Row justify="center" align="middle">
                      <Routes>
                          <Route exact path="/" element={<ProtectedRoute />}>
                              <Route index element={<Home user={user.user} />} />
                              <Route exact path="/profile" element={
                                  <Profile onRefresh={onRefresh} user={user.user} />
                              }
                              />
                              <Route exact path="/saved" element={
                                  <SavedPosts
                                      onRefresh={onRefresh}
                                      savedPosts={
                                                    posts.saved_post.filter(s => s.userId === user.user.id)
                                      }
                                  />
                              }
                              />
                          </Route>
                          <Route
                              exact
                              path="/posts"
                              element={
                                  <Posts
                                        onRefresh={onRefresh}
                                        users={allUsers}
                                        user={user.user}
                                        posts={posts}
                                  />}
                          />
                          <Route
                              exact
                              path="/login"
                              element={user.isAuth ? <Navigate to="/" /> : <Login user={user} onRefresh={onRefresh} />}
                          />
                          <Route
                              exact
                              path="/signup"
                              element={user.isAuth ? <Navigate to="/" /> : <Signup />}
                          />
                          <Route exact path="*" element={<Navigate to="/" />} />
                      </Routes>
                  </Row>
              </Layout.Content>
          </Layout>
      </Layout>
    );
});

export default App;
