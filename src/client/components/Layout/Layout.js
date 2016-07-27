import React from 'react'
import DocumentTitle from 'react-document-title'
import css from 'react-css-modules'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.sss'

const Layout = props => {
  return (
    <DocumentTitle title='Docker Dashboard'>
      <div>
        <Header />
        <div styleName='layout'>
          <Sidebar />
          <div styleName='content'>
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    </DocumentTitle>
  )
}

export default css(Layout, styles)
