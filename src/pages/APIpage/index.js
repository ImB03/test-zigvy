import React from 'react';
import styles from '~/pages/APIpage/APIpage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function APIpage() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>TITLE</div>
      <div className={cx('infor-filter')}>
        <div className={cx('infor')}>AUTHOR DATE</div>
        <div className={cx('filter')}>FILTER</div>
      </div>
      <div className={cx('text')}>TEXT</div>
      <div className={cx('comment')}>COMMENT</div>
    </div>
  );
}
