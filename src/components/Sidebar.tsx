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
import { sidebarItems } from '@/constants/sidebarItems';

const { Header: AntHeader, Sider, Content } = Layout;
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const role = 'user';
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
                    items={sidebarItems(role)}
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