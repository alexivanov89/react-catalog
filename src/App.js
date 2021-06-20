import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routesConfig from './routes/routesConfig';

import './App.css';
import Header from './components/Header';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Switch>
                    {routesConfig.map((route, index) => (
                        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                    ))}
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
