import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Login from './Login/LoginPage'
import Main from './Views/MainPage'
import Cart from './Views/CartShopPage'


ReactDOM.render((
    <Router >
        <Switch>
            <Route exact path='/login' component={Login} />

            <Route exact path='/cart' component={Cart} />
            <Route exact path='/' component={Main} />
        </Switch>
    </Router>

), document.getElementById('root'));