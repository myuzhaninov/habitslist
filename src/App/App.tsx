import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import { Navigation, routes } from '../Navigation'
import { IRedirectRoute, IRoute } from '../Navigation.interface'
import { Admin } from '../Admin'
import { Journal } from '../Journal'



interface AppProps extends RouteComponentProps {
    redirectTo?: string;
}



function AppComponent(props: AppProps): JSX.Element {
    return (
        <main>
            <Navigation />

            <Switch>
                <Route exact
                       path={(routes[0] as IRedirectRoute).from}>
                    <Redirect to={props.redirectTo || (routes[0] as IRedirectRoute).to} />
                </Route>
                <Route path={(routes[1] as IRoute).path}>
                    <Journal />
                </Route>
                <Route path={(routes[2] as IRoute).path}>
                    <Admin />
                </Route>
            </Switch>
        </main>
    )
}



export const App = withRouter(AppComponent)