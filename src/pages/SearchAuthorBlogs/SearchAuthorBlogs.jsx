import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './SearchAuthorBlogs.module.scss';

const cx = classNames.bind(styles);

export default function SearchAuthorBlogs() {
  const [getApiUsers, setGetApiUsers] = useState([]);
  const [getApiPosts, setGetApiPosts] = useState([]);
  let params = useParams();

  const getPostsApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const infoPosts = await data.json();
    setGetApiPosts(infoPosts);
  };

  const getUsersApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users?q=${params.input}`);
    const infoUsers = await data.json();
    setGetApiUsers(infoUsers);
  };

  useEffect(() => {
    getUsersApi();
    getPostsApi();
  }, [params.input]);

  return (
    <div
      className={cx('wrapper')}
      
    >
      {getApiUsers.map((apiuser) =>
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
