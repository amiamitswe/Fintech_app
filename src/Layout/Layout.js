import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import Home from '../container/Home/Home'
import PageNotFound from '../container/PageNotFound/PageNotFound'
import Footer from './Footer/Footer'



const Layout = () => {
  return (
    <>
      <Header />

      <div className='Body'>
        <Switch>

          <Route path='/a'>
            <Home />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route>
            <PageNotFound />
          </Route>

        </Switch>
      </div>

      <Footer />
    </>
  )
}

export default Layout
