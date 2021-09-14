import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import appStore from '../../store/appStore';
import Header from '../Header';

const Layout = (props) => {
  const { children } = props;

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
