import React from 'react';
import styles from '~/components/SmallComponent/HeaderComponent/HeaderComponent.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function HeaderComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('logo')}>LOGO</div>
        <div className={cx('blogs')}>BLOGS</div>
        <div className={cx('user-name')}>USER NAME</div>
      </div>
    </div>
  );
}
