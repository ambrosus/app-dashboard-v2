import React from 'react';
import { Redirect, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import RouteWithSubRoutes from './RouteWithSubRoutes';
import appStore from '../../store/appStore';

const RenderRoutes = observer(({ privateR, publicR }) =>
  appStore.auth ? (
    <Switch>
      {privateR.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Redirect to="/dashboard/assets" />
    </Switch>
  ) : (
    <Switch>
      {publicR.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Redirect to="/dashboard/login" />
    </Switch>
  ),
);

RenderRoutes.propTypes = {
  privateR: PropTypes.array,
  publicR: PropTypes.array,
};

export default RenderRoutes;
