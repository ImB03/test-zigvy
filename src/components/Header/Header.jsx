import { useContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import { DataUsers } from '~/layouts/Main';
import styles from './Header.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function Header() {
  const apiUsers = useContext(DataUsers);

  return (
    <div className={cx('wrapper')}>
      <Link className={cx('logo')} to={config.routes.home}>
        <Image className={cx('image')} src={images.i29} alt="" />
        <div className={cx('titlelogo')}>LOGO</div>
      </Link>
      <div className={cx('greeting')}>
        <Image className={cx('image')} src={images.anhGaiXinhDeoKinhCan} alt="" />
        <div className={cx('greetingtitle')}>welcome to my app!!!</div>
      </div>
      <div className={cx('avatar')}>
        <Image className={cx('image')} src={images.hinhGaiDep} alt="" />
        <div className={cx('username')}>Gáí Xinh nè!!!</div>
      </div>
    </div>
  );
}
