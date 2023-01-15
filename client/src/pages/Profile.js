// noinspection ES6CheckImport

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import {editUser} from "../http/userAPI";

const Profile = ({user, onRefresh}) => {
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phoneNum', phoneNum);
        formData.append('img', file);
        try {
            await editUser(formData, user.id);
            onRefresh();
            navigate("/");
        } catch (error) {
            alert(error);
        }
    }

    return (
        <Col
            xs={{span: 16, offset: 2}}
            sm={{span: 16, offset: 2}}
            md={{span: 16, offset: 2}}
            lg={{span: 6, offset: 0}}
        >
            <p style={{ marginTop: "150px", textAlign: "center", fontSize: "24px" }}>Choose your profile image</p>
            <Form
                name="profile"
                onFinish={handleSubmit}
            >
                <Form.Item
                    name="image"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: 'Please choose your Profile Image!'
                        },
                    ]}
                >
                    <Input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Item>

                <hr />

                <div style={{ marginTop: "25px" }}>
                    <Form.Item
                        name="full-name"
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: 'Please input your Full Name!'
                            },
                        ]}
                    >
                        <Input
                            placeholder="Full Name"
                            prefix={<UserOutlined />}
                            size="large"
                            style={{borderRadius: "10px"}}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!'
                            },
                        ]}
                    >
                        <PhoneInput
                            placeholder="Phone number"
                            value={phoneNum}
                            onChange={setPhoneNum}
                            style={{fontSize: "large"}}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="page-btn"
                        >
                            Edit Profile
                        </Button>
                    </Form.Item>
                </div>
            </Form>





        </Col>

    )
}

export default Profile;