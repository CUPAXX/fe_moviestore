
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Movie from './pages/Movie'
import Home from './pages/Home';
import Membership from './pages/Membership';
import Yourchart from './pages/Yourchart';
import DetailMovie from './pages/DetailMovie';
import History from './pages/History'

import Login from './pages/Login'
import Register from './pages/Register'

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <PrivateRoute path="/yourchart">
          <Yourchart />
        </PrivateRoute>
        <PrivateRoute path="/history">
          <History/>
        </PrivateRoute>
        <Route path="/movie" component={Movie}/>
        <Route path="/membership" component={Membership}/>
        <Route path="/moviedetail/:id" component={DetailMovie}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
