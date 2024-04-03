import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import SpecificProductPage from './pages/SpecificProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:productId" component={SpecificProductPage} />
      </Switch>
    </Router>
  );
}

export default App;