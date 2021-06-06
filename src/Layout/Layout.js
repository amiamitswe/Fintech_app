import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from '../container/HomePage/Home'
import PageNotFound from '../container/PageNotFound/PageNotFound'

const Layout = () => (
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

export default Layout
