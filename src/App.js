import React from 'react';
import './App.css';
import logo from './logo.svg'
import Header from './components/header/header-component.jsx'
import {HomePage} from './pages/homepage/homepage.component.jsx';
import LoginPage from './pages/login-page/login-page.jsx'
import ShopPage from './pages/shop-page/shop.component.jsx'
import { Route , Switch } from 'react-router-dom';

function App() {
   return (
    <div>
    <Header logo = {logo}/>
      <Switch> 
      <Route exact path='/login' component = {LoginPage} />
        <Route exact path='/' component = {HomePage} />
     <Route exact path = '/shop' component = {ShopPage} />
     </Switch>
    </div>
  );
}

export default App;
