import React from 'react';
import { Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { GithubOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    // 이 children 개념에서
    // <AppLayout> 이 부분의 것들을 children으로 볼 수 있음 </AppLayout>

    return (
        <>
            <Row>
                <Menu style={{ fontWeight: 'bold', width: 320 }} mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="github" icon={<GithubOutlined />}>
                        <Link href="https://github.com/KIMJINOH97">
                            <a>github</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="tistory" icon={<BookOutlined />}>
                        <Link href="https://zin-oh.tistory.com/">
                            <a>tistory</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <StyledButton> hi </StyledButton>
            {children}
        </>
    );
};

export default AppLayout;

// 이런식으로 적용
const StyledButton = styled.button`
    font-weight: bold;
    font-size: 1rem;
    color: red;
`;
// 무조건 첫문자 대문자임
