import React from 'react';
import { Redirect, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import RouteWithSubRoutes from './RouteWithSubRoutes';
import { storageGet } from '../../services/storage.service';

const RenderRoutes = observer(({ routes }) => (
  <Switch>
    {routes.map((route) => {
      if (route.isPrivate && storageGet('account')) {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      }
      return <RouteWithSubRoutes key={route.key} {...route} />;
    })}
    {routes.map((route) => {
      if (route.isPrivate && storageGet('account')) {
        return <Redirect key={route.key} to="/dashboard/assets" />;
      }
      return <Redirect key={route.key} to="/dashboard/login" />;
    })}
  </Switch>
));

RenderRoutes.propTypes = {
  routes: PropTypes.array,
};

export default RenderRoutes;
