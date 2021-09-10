import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Footer from '../Footer';
import appStore from '../../store/appStore';
import Header from '../Header';

const Layout = (props) => {
  const { children } = props;
  const history = useHistory();
  useEffect(() => {
    console.log(history.location.pathname);
  }, []);

  return (
    <div className="layout">
      {!appStore.auth ? <Header /> : null}
      <div className="content">
        <div className="page">{children}</div>
      </div>
      {!appStore.auth ? <Footer /> : null}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
