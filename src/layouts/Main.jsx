import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Main.module.scss';
import Header from '~/components/Header';
import Search from '~/components/Search';
import Navbar from '~/components/Navbar';
import { getUsersFetch } from '~/redux/usersSlice';
import { getPostsFetch } from '~/redux/postsSlice';

const cx = classNames.bind(styles);

export default function Main({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
  }, []);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);

  return (
    <div className={cx('wrapper container-fluid')}>
      <Header />
      <div className={cx('body container-fluid d-flex')}>
        <div className={cx('d-none d-xxl-block')}>
          <Navbar />
        </div>
        <div className={cx('container-fluid')}>
          <div className={cx('d-flex justify-content-center align-items-center')}>
            <Search />
          </div>
          <div className={cx('pages')}>{children}</div>
        </div>
      </div>
    </div>
  );
}
