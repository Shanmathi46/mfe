import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import { StylesProvider,createGenerateClassName} from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export default ()=>{
  return (<div>
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Switch>
          <Route  path='/' component={Landing}/>
          <Route exact path='/pricing' component={Pricing}/>
          
        </Switch>
      </Router>    
    </StylesProvider>
  </div>)
}