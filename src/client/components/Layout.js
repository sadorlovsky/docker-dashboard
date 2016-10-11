import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Containers from './Containers'

const Content = props => (
  <div style={{ marginTop: '20px' }}>
    {props.children}
  </div>
)

const Layout = () => (
  <div>
    <Header />
    <Content>
      <Containers />
    </Content>
    <Footer />
  </div>
)

export default Layout
