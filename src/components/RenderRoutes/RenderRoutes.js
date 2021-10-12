import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { storageGet } from '../../services/storage.service';
import Layout from '../../layouts/Layout';
import Assets from '../../pages/Dashboard/Assets';
import { GeneratedKey, Login, OwnKey, Request, Signup } from '../../pages/Auth';
import Organization from '../../pages/Dashboard/Organization';
import Event from '../../pages/Dashboard/Assets/Event';
import Asset from '../../pages/Dashboard/Assets/Asset';

const RenderRoutes = observer((props) =>
  storageGet('account') ? (
    <Switch>
      <Route
        path="/dashboard/assets"
        exact
        component={() => (
          <Layout>
            <Assets />
          </Layout>
        )}
      />
      <Route
        path="/dashboard/assets/:assetId"
        exact
        component={() => (
          <Layout>
            <Asset />
          </Layout>
        )}
      />
      <Route
        path="/dashboard/assets/:assetId/events/:eventId"
        exact
        component={() => (
          <Layout>
            <Event />
          </Layout>
        )}
      />{' '}
      <Route
        path="/dashboard/organization"
        exact
        component={() => (
          <Layout>
            <Organization />
          </Layout>
        )}
      />
      <Redirect to="/dashboard/assets" from={props.location} />)
    </Switch>
  ) : (
    <Switch>
      <Route path="/dashboard/login" exact component={() => <Login />} />
      <Route path="/dashboard/signup" exact component={() => <Signup />} />
      <Route path="/dashboard/request" exact component={() => <Request />} />
      <Route
        path="/dashboard/signup/generated-key"
        exact
        component={<GeneratedKey />}
      />
      <Route
        path="/dashboard/signup/own-key"
        exact
        component={() => <OwnKey />}
      />
      <Redirect to="/dashboard/login" from={props.location} />)
    </Switch>
  ),
);

RenderRoutes.propTypes = {
  routes: PropTypes.array,
};

export default RenderRoutes;
