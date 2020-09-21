import React from 'react';
import { withSnackbar } from 'notistack'
import HomePage from './views/HomePage';
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import Profile from './views/Profile'
import NotFound from './views/NotFound'
import shopCart from './views/shopCart'
import order from './views/order'
import productDetails from './views/productID'
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom'
import PRoute from './components/protectedRoute'
import unAuth from './views/unauthorized'
import Cookies from 'js-cookie'
import LoginLayout from './layout/loginLayout'
import normalLayout from './layout/normalLayout'
// import paramsRoute from './components/paramsRoute'
import productFcategory from './views/categoryID'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: [
        {
          component: HomePage,
          layout: Cookies.get('token') ? LoginLayout : normalLayout,
          path: '/'
        },
        {
          component: SignIn,
          layout: normalLayout,
          path: '/SignIn'
        },
        {
          component: SignUp,
          layout: normalLayout,
          path: '/SignUp'
        },
        {
          component: unAuth,
          layout: normalLayout,
          path: '/unauthorized'
        },
        {
          component: productFcategory,
          layout: Cookies.get('token') ? LoginLayout : normalLayout,
          path: '/category/:categoryId'
        },
        {
          component: productDetails,
          layout: Cookies.get('token') ? LoginLayout : normalLayout,
          path: '/product/:productId'
        },

      ],
      PRout: [
        {
          component: Profile,
          layout: LoginLayout,
          path: "/profile",
          token: Cookies.get('token'),
        },
        {
          component: shopCart,
          layout: LoginLayout,
          path: "/shopCart",
          token: Cookies.get('token'),
        },
        {
          component: order,
          layout: LoginLayout,
          path: "/order",
          token: Cookies.get('token'),
        }
      ],
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <Switch>
            {
              this.state.route.map(e => (
                <Route exact path={e.path} >
                  <e.layout>
                    <e.component></e.component>
                  </e.layout>
                </Route>
              ))
            }
            {
              this.state.PRout.map(p => (
                <PRoute
                  component={p.component}
                  layout={p.layout}
                  exact path={p.path}
                  token={p.token}
                />
              ))
            }
            <Route
              component={NotFound}
              path="/"
            />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}



export default withSnackbar(App);

// ./productID
// category
// category/apple
// user
// 