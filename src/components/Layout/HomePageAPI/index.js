import React from 'react';
import HeaderComponent from '~/components/SmallComponent/HeaderComponent';
import styles from '~/components/Layout/HomePageAPI/HomePageAPI.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function HomePageAPI({ children }) {
  return (
    <div className={cx('wrapper')}>
      <HeaderComponent />
      <div className={cx('content')}>{children}</div>
    </div>
  );
}
