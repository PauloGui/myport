import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Services from './components/PageServices';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Contact from './components/Contact';
import Admin from './admin/Admin';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/servicos' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/price' component={Price} />
          <Route path='/contact' component={Contact} />
          <Route path='/admin' component={Admin} />
          <Footer />
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
