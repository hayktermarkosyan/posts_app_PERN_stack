// noinspection ES6CheckImport

import React, {useEffect} from "react";
import { Col, Card } from "antd";
import unknownUser from "../images/unknown_user.png";

const Home = ({user}) => {

    return (
        <Col
            xs={{span: 20, offset: 0}}
            sm={{offset: 0}}
            span={20}
        >
            <div align="center" style={{marginTop: "50px", fontSize: "22px"}}>
                <p>Welcome to home page!</p>
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                        user.img ? <img alt="user" src={process.env.REACT_APP_API_URL + user.img} /> :
                            <img alt="unknown" src={unknownUser} />
                    }
                >
                    <Card.Meta
                        title={user.name ? user.name : "Unknown user"}
                        description={user.phoneNum ? user.phoneNum : user.email} />
                </Card>
            </div>
        </Col>
    );
};

export default Home;