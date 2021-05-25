import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './screens/homepage';
import Loading from './components/loader';
import Technologies from './screens/technologies';
import LoginScreen from './screens/login';
import DashboardScreen from './screens/dashboard';
import UnderConstruction from './components/under-construction';
import RegisterScreen from './screens/register';
import UsersScreen from './screens/users';
import CartComponent from './screens/cart';
import MyOrders from './screens/myorders';
import MyProfileScreen from './screens/myprofile';
const SpecificProduct = React.lazy(() => import('./screens/specific-product'));
const Products = React.lazy(() => import('./screens/products'));
const Employees = React.lazy(() => import('./screens/employees'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <React.Suspense fallback={<Loading/>}>
            <Route path="/" component={HomePage} exact >
            </Route>
            <Route path="/products" component={Products} exact />
            <Route path="/specific-product/:productId" component={SpecificProduct} />  
            <Route path="/employees" component={Employees} exact />
            <Route path="/technologies" component={Technologies} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/dashboard" component={DashboardScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/users" component={UsersScreen} exact />
            <Route path="/cart" component={CartComponent} exact/>
            <Route path="/my-orders" component={MyOrders} exact/>
            <Route path="/my-profile" component={MyProfileScreen} exact/>
            <Route path="/under-construction" render={() => ( 
                <UnderConstruction />
              )} exact />
            {/* <Route children={() => (
              <div className="container my-4 py-4">
                <div className="row">
                  <div className="col-sm">
                    <h2>Child route which renders for every route present in app.</h2>
                  </div>
                </div>
              </div>
            )} /> */}
          </React.Suspense>
        <Footer />
      </div>
    
    </BrowserRouter>
  );
}

export default App;
