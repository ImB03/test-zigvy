import classNames from 'classnames/bind';
import config from '~/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function Header() {
  const apiUsers = useSelector((state) => state.users.users);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container-fluid d-flex justify-content-between align-items-center')}>
        <Link className={cx('logo d-flex justify-content-center align-items-center fs-1')} to={config.routes.home}>
          <Image className={cx('image')} src={images.logoBlog} alt="" />
          <div className={cx('titlelogo')}>LOGO</div>
        </Link>
        <div className={cx('avatar d-xxl-flex justify-content-center align-items-center fs-1 d-none')}>
          <Image className={cx('image')} src={images.hinhGaiDep} alt="" />
          <div className={cx('username')}>Hi! I'm web developer</div>
        </div>
      </div>
      <Navbar expand="xxl">
        <Container>
          <div className={cx('fs-5 me-4')}>Blog Web</div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className={cx('me-auto')}>
              <Nav.Link
                as={NavLink}
                to={config.routes.home}
                className={(active) => cx(active.isActive && 'active')}
                end
              >
                Home
              </Nav.Link>
              {apiUsers.map((infoUser) => (
                <Nav.Link
                  as={NavLink}
                  key={infoUser.id}
                  className={(active) => cx(active.isActive && 'active')}
                  to={`/chooseauthorblogs/${infoUser.id}`}
                >
                  {infoUser.username}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
