import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './Home.module.scss';
import { DataUsers } from '~/layouts/Main';

const cx = classNames.bind(styles);
export default function Home() {
  const apiUsers = useContext(DataUsers);
  const [getApiPosts, setGetApiPosts] = useState([]);

  const getPostsApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const infoPosts = await data.json();
    setGetApiPosts(infoPosts);
  };

  useEffect(() => {
    getPostsApi();
  }, []);

  return (
    <div
      className={cx('wrapper')}
      
    >
      {apiUsers.map((apiuser) =>
        getApiPosts.map(
          (apipost) =>
            apiuser.id === apipost.userId && (
              <Link key={apipost.id} to={`/contentblog/${apipost.id}`}>
                <div className={cx('blog')}>
                  <div className={cx('nameauthor')}>
                    Author: {apiuser.name}({apiuser.username})
                  </div>
                  <div className={cx('title')}>Title: {apipost.title}</div>
                </div>
              </Link>
            ),
        ),
      )}
    </div>
  );
}
