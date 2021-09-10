import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import { publicRoutes, privateRoutes } from './routes';
import './styles/Main.scss';
import appStore from './store/appStore';

const Main = observer(() => {
  useEffect(() => {}, [appStore.auth]);
  return (
    <Layout>
      <RenderRoutes publicR={publicRoutes} privateR={privateRoutes} />
    </Layout>
  );
});

export default Main;
