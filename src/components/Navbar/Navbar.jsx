import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Navbar.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

export default function Navbar() {
  const apiUsers = useSelector((state) => state.users.users);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('d-flex flex-column fs-4 font-monospace fw-semibold')}>
        <NavLink to={config.routes.home} className={(active) => cx('navbarlink', active.isActive && 'active')} end>
          Home
        </NavLink>
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
    </div>
  );
}
