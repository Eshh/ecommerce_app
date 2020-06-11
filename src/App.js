import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop-page/shop.component.jsx'
import { Route , Switch } from 'react-router-dom';

function App() {


   return (
    <div>
    
      <Switch> 
        <Route exact path='/' component = {HomePage} />
     <Route exact path = '/shop' component = {ShopPage} />
     S</Switch>
    </div>
  );
}

export default App;
