import React from 'react';
import { Calendar, Row, Col, Image, Descriptions } from 'antd';

const Home = () => {
    return (
        // span 하고 안 하고의 차이??
        <>
            <Row gutter={[10, 10]}>
                <Col flex={2} span={10}>
                    {/* <img src={require('../public/pengsu.png')} /> */}
                    <Image src={require('../public/pengsu.png')} alt="my picture" />{' '}
                </Col>
                <Col flex={3} span={10}>
                    <Descriptions title="내 정보" size="small">
                        <Descriptions.Item label="이름">김진오</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
            <Row gutter={[10, 10]}>
                <Calendar></Calendar>
            </Row>
        </>
    );
};

export default Home;
