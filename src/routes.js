import React from 'react';
import Assets from './pages/Dashboard/Assets';
import Layout from './layouts/Layout';
import { Login, Signup, Request, GeneratedKey, OwnKey } from './pages/Auth';
import Asset from './pages/Dashboard/Assets/Asset';
import Event from './pages/Dashboard/Assets/Event';
import Organization from './pages/Dashboard/Organization';

const routes = [
  {
    path: '/dashboard/assets',
    key: 'assets',
    exact: true,
    isPrivate: true,
    component: () => (
      <Layout>
        <Assets />
      </Layout>
    ),
  },
  {
    path: '/dashboard/assets/:assetId',
    key: 'asset',
    exact: true,
    isPrivate: true,
    component: () => (
      <Layout>
        <Asset />
      </Layout>
    ),
  },
  {
    path: '/dashboard/assets/:assetId/events/:eventId',
    key: 'event',
    exact: true,
    isPrivate: true,
    component: () => (
      <Layout>
        <Event />
      </Layout>
    ),
  },
  {
    path: '/dashboard/organization',
    key: 'organization',
    exact: true,
    isPrivate: true,
    component: () => (
      <Layout>
        <Organization />
      </Layout>
    ),
  },
  {
    path: '/dashboard/login',
    key: 'login',
    exact: true,
    isPrivate: false,
    component: () => <Login />,
  },
  {
    path: '/dashboard/signup',
    key: 'signup',
    exact: true,
    isPrivate: false,
    component: () => <Signup />,
  },
  {
    path: '/dashboard/request',
    key: 'request',
    exact: true,
    isPrivate: false,
    component: () => <Request />,
  },
  {
    path: '/dashboard/signup/generated-key',
    key: 'generated-key',
    exact: true,
    isPrivate: false,
    component: () => <GeneratedKey />,
  },
  {
    path: '/dashboard/signup/own-key',
    key: 'own-key',
    exact: true,
    isPrivate: false,
    component: () => <OwnKey />,
  },
];

export default routes;
