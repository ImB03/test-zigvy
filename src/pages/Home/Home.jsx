import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Home.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);
export default function Home() {
  
  const apiUsers = useSelector((state) => state.users.users);
  const getApiPosts = useSelector((state) => state.posts.posts);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row row-cols-1 row-cols-md-2 row-cols-lg-3')}>
          {apiUsers.map((apiuser) =>
            getApiPosts.map(
              (apipost) =>
                apiuser.id === apipost.userId && (
                  <Link
                    className={cx('col d-flex justify-content-center align-items-center gy-4 gx-3')}
                    key={apipost.id}
                    to={`/contentblog/${apipost.id}`}
                  >
                    <div className={cx('blog')}>
                      <Image className={cx('image')} src={images.anhGaiXinhDeoKinhCan} alt="" />
                      <div className={cx('info fs-5')}>
                        <div className={cx('nameauthor')}>
                          <b>Author:</b> {apiuser.name} ({apiuser.username})
                        </div>
                        <div className={cx('title')}>
                          <b>Title:</b> {apipost.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ),
            ),
          )}
        </div>
      </div>
    </div>
  );
}
