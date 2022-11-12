import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import { DataUsers } from '~/layouts/Main';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

export default function Navbar() {
  const apiUsers = useContext(DataUsers);
  return (
    <div className={cx('wrapper')}>
      {apiUsers.map((infoUser) => (
        <NavLink
          key={infoUser.id}
          className={(active) => cx('navbarlink', active.isActive && 'active')}
          to={`/chooseauthorblogs/${infoUser.id}`}
        >
          {infoUser.username}
        </NavLink>
      ))}
    </div>
  );
}
