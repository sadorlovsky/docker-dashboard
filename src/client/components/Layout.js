import React from 'react'
import colors from '../colors'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = props => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flexGrow: 1, padding: '10px', backgroundColor: colors.main }}>
        {props.children}
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
