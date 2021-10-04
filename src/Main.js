import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';

import RenderRoutes from './components/RenderRoutes';
import './styles/Main.scss';

const Main = observer(() => (
  <BrowserRouter>
    <RenderRoutes />
  </BrowserRouter>
));

export default Main;
