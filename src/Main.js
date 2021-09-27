import React from 'react';
import { observer } from 'mobx-react-lite';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = observer(() => (
  <Layout>
    <RenderRoutes routes={routes} />
  </Layout>
));

export default Main;
