import React from 'react'
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { Login } from '../Pages/Account/Login'
import { Admin } from '../Pages/Admin/Admin';
import { AccountState } from '../store/Account/types';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

export const AccountRoute = ({ children, ...rest}: RouteProps): JSX.Element => {

    const account: AccountState = useSelector((state: AppState) => state.account);
    if (account.token) {
        return <Navigate to="/admin" />;
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
      );
  }
