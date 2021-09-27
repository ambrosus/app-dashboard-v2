import React from 'react';
import { Route } from 'react-router';

export const RouteWithSubRoutes = (route) => {
  const { path, exact } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component {...props} />}
    />
  );
};

export default RouteWithSubRoutes;
