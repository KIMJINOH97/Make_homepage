import React from 'react';
import { Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { GithubOutlined, HomeOutlined, BookOutlined, RobotOutlined } from '@ant-design/icons';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    // 이 children 개념에서
    // <AppLayout> 이 부분의 것들을 children으로 볼 수 있음 </AppLayout>

    return (
        <>
            <Row gutter={[10, 10]}>
                <Menu style={{ fontWeight: 'bold', width: 500 }} mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="portfolio" icon={<RobotOutlined />}>
                        <Link href="/portfolio">
                            <a>portfolio</a>
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
            {children}
            <StyledButton>
                <Abc>hi</Abc>
                <Abc>hi</Abc>
                <Abc>hi</Abc>
            </StyledButton>
        </>
    );
};

export default AppLayout;

// 이런식으로 적용
// justify-content : 정렬 방법
const StyledButton = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Abc = styled.button`
    font-weight: bold;
    font-size: 1rem;
    color: red;
    display: flex;
`;
// 무조건 첫문자 대문자임
