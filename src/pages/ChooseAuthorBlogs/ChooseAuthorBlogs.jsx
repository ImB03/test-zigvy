import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './ChooseAuthorBlogs.module.scss';

const cx = classNames.bind(styles);

export default function ChooseAuthorBlogs() {
  const [getApiPosts, setGetApiPosts] = useState([]);
  const [getApiUser, setgetApiUser] = useState({});
  let params = useParams();

  const getPostsApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`);
    const infoPosts = await data.json();
    setGetApiPosts(infoPosts);
  };
  const getUserApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const infoUser = await data.json();
    setgetApiUser(infoUser);
  };

  useEffect(() => {
    getUserApi();
    getPostsApi();
  }, [params.userId]);

  return (
    <div
      className={cx('wrapper')}
      
    >
      {getApiPosts.map((apipost) => (
        <Link key={apipost.id} to={`/contentblog/${apipost.id}`}>
          <div className={cx('blog')}>
            <div className={cx('nameauthor')}>
              Author: {getApiUser.name} ({getApiUser.username})
            </div>
            <div className={cx('title')}>Title :{apipost.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
