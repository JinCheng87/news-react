import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/articles/:articleID" component={ArticlePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
