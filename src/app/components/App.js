import React from 'react'
import Header from './Header'

import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

import stylesheet from 'antd/dist/antd.min.css'

const App = ({ children }) => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  </Layout>
)

export default App
