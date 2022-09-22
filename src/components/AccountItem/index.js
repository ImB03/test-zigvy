import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avata')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_300x300.webp?x-expires=1663207200&x-signature=jx7IZv4arZkHQocnOCNzF2iQH1I%3D"
        alt="Hoaa"
      />
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          Đạt va li
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <div className={cx('username')}>datvali@gmail.com</div>
      </div>
    </div>
  );
}
