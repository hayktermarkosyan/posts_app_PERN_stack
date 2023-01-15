// noinspection ES6CheckImport

import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Col, Row, Button} from "antd";
import {
    HomeOutlined,
    LogoutOutlined,
    LoginOutlined,
    ProfileOutlined,
    UnorderedListOutlined,
    SaveOutlined
} from "@ant-design/icons";

const Navigation = ({user}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        user.setIsAuth(false);
        navigate("/login");
        user.setUser({});
        localStorage.removeItem("token");
    };

    return (
        <Row justify="center">
            <Col>
                {user.isAuth &&
                <Link to="/profile" title="Profile" className="icon-btn" style={{top: 0}}>
                    <ProfileOutlined className="icon" />
                </Link>
                }
                {user.isAuth &&
                <Link to="/" title="Home" className="icon-btn" style={{top: 120}}>
                    <HomeOutlined className="icon" />
                </Link>
                }
                <Link to="/posts" title="Posts" className="icon-btn" style={{top: 240}}>
                    <UnorderedListOutlined className="icon" />
                </Link>
                {user.isAuth &&
                <Link to="/saved" title="Saved Posts" className="icon-btn" style={{top: 360}}>
                    <SaveOutlined className="icon" />
                </Link>
                }
                {user.isAuth &&
                <Button title="Log Out" className="icon-btn">
                    <LogoutOutlined className="icon" onClick={handleLogout} />
                </Button>}
                {!user.isAuth &&
                <Link to="/login" title="Log In" className="icon-btn">
                    <LoginOutlined className="icon" />
                </Link>}
            </Col>
        </Row>
    )
}

export default Navigation;
