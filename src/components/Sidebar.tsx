"use client"
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Dropdown, MenuProps, Space, Avatar, Col } from 'antd';

const { Header: AntHeader, Sider, Content } = Layout;
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <Button type="text" danger>
                    Logout
                </Button>
            ),
        },
    ];
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <AntHeader
                    style={{
                        background: "#fff",
                    }}
                >

                    <Row 
                    justify="space-between">
                        <Col className='-ml-12'>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col>
                            <Row justify="end"
                                align="middle"
                                style={{
                                    height: "100%",
                                }}>
                                <p
                                    style={{
                                        margin: "0px 5px",
                                    }}
                                >
                                    Admin
                                </p>
                                <Dropdown menu={{ items }}>
                                    <a>
                                        <Space wrap size={16}>
                                            <Avatar size="large" icon={<UserOutlined />} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </Row>

                        </Col>

                    </Row>
                </AntHeader>
                <Content
                    style={{

                        padding: 24,
                        minHeight: "90vh",
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;