import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";
import { IRedirectRoute, IRoute } from './Navigation.interface';
import styles from './Navigation.module.scss';

export const routes: (IRedirectRoute | IRoute)[] = [
    {
        redirect: true,
        from: '/',
        to: '/journal',
    },
    {
        label: 'Дневник',
        path: '/journal',
    },
    {
        label: 'Админ',
        path: '/admin',
    },
]



export function Navigation(): JSX.Element {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Habits List</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Item>
                        {
                            routes.map((route: IRedirectRoute | IRoute) => {
                                if ('redirect' in route) {
                                    return null
                                }
                                return (
                                    <NavLink to={route.path} className={styles.listItem} activeClassName={styles.listItemIsActive}>
                                        {route.label}
                                    </NavLink>
                                )
                            })
                        }
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}