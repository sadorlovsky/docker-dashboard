import React from 'react'
import DocumentTitle from 'react-document-title'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = props => {
  return (
    <DocumentTitle title='Docker Dashboard'>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </DocumentTitle>
  )
}

export default Layout
