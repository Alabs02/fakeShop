import React from 'react';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import ProductDetails from '../../components/ProductDetails';

function App() {
  return (
    <div className="w-full min-h-screen bg-indigo-50">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/product/:productId" exact component={ProductDetails}></Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
