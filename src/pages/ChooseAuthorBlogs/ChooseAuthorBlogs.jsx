import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './ChooseAuthorBlogs.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

export default function ChooseAuthorBlogs() {
  const [getApiPosts, setGetApiPosts] = useState([]);
  const [getApiUser, setgetApiUser] = useState({});
  let params = useParams();

  const debouncedValue = useDebounce(params, 700);

  const getPostsApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${debouncedValue.userId}`);
    const infoPosts = await data.json();
    setGetApiPosts(infoPosts);
  };
  const getUserApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${debouncedValue.userId}`);
    const infoUser = await data.json();
    setgetApiUser(infoUser);
  };

  useEffect(() => {
    getUserApi();
    getPostsApi();
  }, [debouncedValue.userId]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('row row-cols-1 row-cols-md-2 row-cols-lg-3')}>
          {getApiPosts.map((apipost) => (
            <Link
              className={cx('col d-flex justify-content-center align-items-center gy-4 gx-3')}
              key={apipost.id}
              to={`/contentblog/${apipost.id}`}
            >
              <div className={cx('blog')}>
                <Image className={cx('image')} src={images.coNangNhiNhanh} alt="" />
                <div className={cx('info fs-5')}>
                  <div className={cx('nameauthor')}>
                    <b>Author:</b> {getApiUser.name} ({getApiUser.username})
                  </div>
                  <div className={cx('title')}>
                    <b>Title:</b> {apipost.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
