import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick';
import Input from '../../components/Input';

import logoIcon from '../../assets/svg/logo.svg';
import searchIcon from '../../assets/svg/search.svg';
import personIcon from '../../assets/svg/person.svg';

const Header = () => {
  const slideSearchRef = useRef(null);
  const dropdownRef = useRef(null);
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState(history.location.pathname);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isActiveSlideSearch, setIsActiveSlideSearch] = useDetectOutsideClick(
    slideSearchRef,
    false,
  );
  const logo = (
    <div className="header__logo">
      <Link to="/dashboard/assets">
        <ReactSVG src={logoIcon} wrapper="span" />
      </Link>
    </div>
  );
  const menu = (
    <div className="header__menu">
      <div onClick={() => setActiveMenu('/dashboard/node')} role="presentation">
        <Link to="/dashboard/node">
          <span
            style={{
              color: activeMenu === '/dashboard/node' ? '#4A38AE' : '#333333',
            }}
          >
            Node
          </span>
          <span
            className={
              activeMenu === '/dashboard/node'
                ? 'header-menu-active'
                : 'header-menu-inactive'
            }
          />
        </Link>
      </div>
      <div
        onClick={() => setActiveMenu('/dashboard/organization')}
        role="presentation"
      >
        <Link to="/dashboard/organization">
          <span
            style={{
              color:
                activeMenu === '/dashboard/organization'
                  ? '#4A38AE'
                  : '#333333',
            }}
          >
            Organization
          </span>{' '}
          <span
            className={
              activeMenu === '/dashboard/organization'
                ? 'header-menu-active'
                : 'header-menu-inactive'
            }
          />{' '}
        </Link>
      </div>
      <div
        onClick={() => setActiveMenu('/dashboard/assets')}
        role="presentation"
      >
        <Link to="/dashboard/assets">
          <span
            style={{
              color: activeMenu === '/dashboard/assets' ? '#4A38AE' : '#333333',
            }}
          >
            Assets
          </span>{' '}
          <span
            className={
              activeMenu === '/dashboard/assets'
                ? 'header-menu-active'
                : 'header-menu-inactive'
            }
          />
        </Link>
      </div>
    </div>
  );
  const setting = (
    <div className="header__setting">
      <div
        className="header__setting--search"
        onClick={() => {
          setIsActiveSlideSearch(true);
        }}
        role="presentation"
      >
        {' '}
        {!isActiveSlideSearch ? (
          <ReactSVG
            src={searchIcon}
            wrapper="span"
            onClick={() => {
              setIsActiveSlideSearch(true);
            }}
          />
        ) : (
          <Input
            inputFocusOut={isActiveSlideSearch}
            inputFocusOutHandler={setIsActiveSlideSearch}
            type="text"
            icon={searchIcon}
            placeholder="You are looking at placeholder"
          />
        )}
      </div>
      <div
        className="header__setting--profile"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(!isActive);
        }}
        role="presentation"
      >
        {' '}
        <ReactSVG src={personIcon} wrapper="span" />
      </div>
      <div
        ref={dropdownRef}
        className={classNames(
          'dropdown-profile-menu',
          { active: isActive },
          { inactive: !isActive },
        )}
      >
        <div>My name</div>
        <hr />
        <div>My email</div>
        <hr />
        <div>Logout</div>
      </div>
    </div>
  );
  return (
    <div className="header">
      {logo}
      {menu}
      {setting}
    </div>
  );
};

export default Header;
