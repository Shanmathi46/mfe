import React,{lazy, Suspense,useState} from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Header from './components/Header';
const AuthApp = lazy(()=> import('./components/AuthApp'));
const MarketingApp = lazy(()=> import('./components/MarketingApp'));
import Progress from './components/Progress';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default ()=>{
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
            <Suspense fallback={<Progress/>}>
              <Switch>
                <Route path='/auth' >
                <AuthApp onSignIn={()=> setIsSignedIn(true)}/>
                </Route>
                <Route path='/' component={MarketingApp}/>
              </Switch>
            </Suspense>
          </div>
          </StylesProvider>
      </BrowserRouter> 
  )
}