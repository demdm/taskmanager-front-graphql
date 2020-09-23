// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import { book } from './book';

// Pages
import { LoginPage } from '../pages/login';

export const Routes = () => (
    <>
        <Switch>
            <Route exact path={book.root}>
                <h1>Root page</h1>
            </Route>
            <Route exact path={book.login}>
                <LoginPage />
            </Route>
        </Switch>
    </>
)