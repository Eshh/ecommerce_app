import React from 'react';
import './App.css';
import logo from './logo.svg'
import Header from './components/header/header-component.jsx'
import {HomePage} from './pages/homepage/homepage.component.jsx';
import LoginPage from './pages/login-page/login-page.jsx'
import ShopPage from './pages/shop-page/shop.component.jsx'
import { Route , Switch } from 'react-router-dom';
import {auth ,  createUserProfileDocument} from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          })
          console.log(this.state)
        })
      }
      else{
        this.setState({currentUser : userAuth})
      }
    
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header logo = {logo} currentUser = {this.state.currentUser}/>
        <Switch> 
        <Route exact path='/login' component = {LoginPage} />
          <Route exact path='/' component = {HomePage} />
       <Route exact path = '/shop' component = {ShopPage} />
       </Switch>
      </div>
    );
  }

}

export default App;
