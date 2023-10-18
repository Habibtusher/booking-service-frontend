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
import { decodedToken } from '@/utils/jwt';
import { authKey } from '@/constants/storageKey';
import { getFromLocalStorage } from '@/utils/local-storage';
import { getUserInfo } from '@/services/auth.service';
import Link from 'next/link';

const { Header: AntHeader, Sider, Content } = Layout;
const Sidebar = ({ children }: { children: React.ReactNode }) => {
    
    const {role} = getUserInfo() as any;
    console.log("hello from sidebar",role);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
               <Link href="/home"><p className='text-white text-3xl text-center py-2'>Service</p></Link> 
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