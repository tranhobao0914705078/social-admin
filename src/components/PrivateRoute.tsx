import React from 'react'
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { Login } from '../Pages/Account/Login'
import { Admin } from '../Pages/Admin/Admin';

export const PrivateRoute = ({ children, ...rest}: RouteProps): JSX.Element => {
    const isAuthenticated = false;
    if (isAuthenticated) {
        return <Navigate to="/admin" />;
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
      );
  }
