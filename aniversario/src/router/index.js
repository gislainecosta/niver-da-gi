import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/header';
import Home from '../pages/home';
import Karaoke from '../pages/karaoke';
import Localization from '../pages/localization';
import Start from '../pages/start';
import Vestment from '../pages/vestment';


const routes = [
    {
        path: '/',
        page: <Start />
    },
    {
        path: '/home',
        page: <Home />
    },
    {
        path: '/karaoke',
        page: <Karaoke />
    },
    {
        path: '/local',
        page: <Localization />
    },
    {
        path: '/o-que-vestir',
        page: <Vestment />
    }
];

const Routes = () => {
    return <BrowserRouter>
        <Switch>
            {
                routes.map(
                    (route) => {
                        return <Route key={route.page} exact path={route.path}>
                            {
                                route.path === '/' ?
                                    route.page :
                                    <>
                                        <Header />
                                        {route.page}
                                    </>
                            }
                        </Route>;
                    }
                )
            }
        </Switch>
    </BrowserRouter>
};

export default Routes;