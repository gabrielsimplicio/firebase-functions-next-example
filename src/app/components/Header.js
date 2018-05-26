import * as React from 'react';
import Link from 'next/link';

import { Layout, Menu } from 'antd';

const Header = ({ pathname }) => (
  <Layout.Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link prefetch href='/'><a>Home</a></Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link prefetch href='/sobre'><a>Sobre</a></Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
)

export default Header
