import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About'
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';

import './css/App.css';
import './css/Responsive.css';
import './css/Utils.css';


const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="/faculty" component={Faculty} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
