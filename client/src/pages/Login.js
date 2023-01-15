// noinspection ES6CheckImport

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Form, Alert, Button, Input } from "antd";
import {login} from "../http/userAPI";

const Login = ({user, onRefresh}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            user.setIsAuth(true);
            onRefresh();
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Col
            xs={{span: 14, offset: 0}}
            sm={{span: 16, offset: 0}}
            md={{span: 16, offset: 0}}
            lg={{span: 6, offset: 0}}
            style={{ marginTop: "200px" }}
        >
            <div align="center">
                {error && <Alert
                    style={{marginBottom: "20px", borderRadius: "10px"}}
                    type="error"
                    message={error}
                />
                }
                <Form
                    name="login"
                    onSubmitCapture={handleSubmit}
                    validateMessages={{
                        required: true,
                        types: {
                            email: "Email is not a valid"
                        }
                    }}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Email"
                            size="large"
                            style={{borderRadius: "10px"}}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                            size="large"
                            style={{borderRadius: "10px"}}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="page-btn"
                        >
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <div align="center" style={{fontSize: "18px"}}>
                Do you want to create an account? <Link to="/signup">Sign up</Link>
            </div>
        </Col>
    );
};

export default Login;