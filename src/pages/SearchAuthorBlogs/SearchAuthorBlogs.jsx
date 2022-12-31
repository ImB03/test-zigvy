import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './SearchAuthorBlogs.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

export default function SearchAuthorBlogs() {
  const getApiPosts = useSelector((state) => state.posts.posts);
  const [getApiUsers, setGetApiUsers] = useState([]);
  let params = useParams();
  const debouncedValue = useDebounce(params, 700);

  const getUsersApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users?q=${debouncedValue.input}`);
    const infoUsers = await data.json();
    setGetApiUsers(infoUsers);
  };

  useEffect(() => {
    getUsersApi();
  }, [debouncedValue.input]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row row-cols-1 row-cols-md-2 row-cols-lg-3')}>
          {getApiUsers.map((apiuser) =>
            getApiPosts.map(
              (apipost) =>
                apiuser.id === apipost.userId && (
                  <Link
                    className={cx('col d-flex justify-content-center align-items-center gy-4 gx-3')}
                    key={apipost.id}
                    to={`/contentblog/${apipost.id}`}
                  >
                    <div className={cx('blog')}>
                      <Image className={cx('image')} src={images.anhGaiXinh} alt="" />
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
