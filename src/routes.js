import React from 'react';
import Assets from './pages/Dashboard/Assets';
import Layout from './layouts/Layout';
import { Login, Signup, Request, GeneratedKey, OwnKey } from './pages/Auth';
import Asset from './pages/Dashboard/Assets/Asset';
import Event from './pages/Dashboard/Assets/Event';
import Organization from './pages/Dashboard/Organization';

const privateRoutes = [
  {
    path: '/dashboard/assets',
    key: 'assets',
    exact: true,
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
    component: () => (
      <Layout>
        <Organization />
      </Layout>
    ),
  },
];
const publicRoutes = [
  {
    path: '/dashboard/login',
    key: 'login',
    exact: true,
    component: () => <Login />,
  },
  {
    path: '/dashboard/signup',
    key: 'signup',
    exact: true,
    component: () => <Signup />,
  },
  {
    path: '/dashboard/request',
    key: 'request',
    exact: true,
    component: () => <Request />,
  },
  {
    path: '/dashboard/signup/generated-key',
    key: 'generated-key',
    exact: true,
    component: () => <GeneratedKey />,
  },
  {
    path: '/dashboard/signup/own-key',
    key: 'own-key',
    exact: true,
    component: () => <OwnKey />,
  },
];

export { publicRoutes, privateRoutes };
