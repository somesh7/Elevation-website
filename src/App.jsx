import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Stories from './Stories';
import Team from './Team';
import Career from './Career';
import Launch from "./Launch";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
    return( <>
   
    <BrowserRouter>
    <Navbar />
    
    
    <Switch>
        <Route exact  path="/" component={Home} /> 
        <Route exact path="/portfolio"  component={Portfolio} /> 
        <Route exact path="/stories" component={Stories} />
        <Route exact  path="/team" component={Team} /> 
        <Route  exact path="/career" component={Career} />
        <Route  exact path="/launch" component={Launch} />
        <Redirect to="/" />
    </Switch>
    <Footer />
    </BrowserRouter>

    
    </>
    );
}
export default App;