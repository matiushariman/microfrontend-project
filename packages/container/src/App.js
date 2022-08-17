import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});


export default () => {
  return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <Switch>
                <div>
                    <Header />
                    <Route path="/auth" component={AuthApp} />
                    <Route exact path="/" component={MarketingApp} />
                </div>
            </Switch>
        </StylesProvider>
    </BrowserRouter>
  );
};
