import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Books from './components/Books';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books />
        <Footer />
      </div>
    )
  }
}

export default App