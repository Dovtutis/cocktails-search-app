import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SingleCocktail from "./pages/SingleCocktail/SingleCocktail";
import Error from "./pages/Error/Error";

// import components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cocktail/:id'>
            <SingleCocktail />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
