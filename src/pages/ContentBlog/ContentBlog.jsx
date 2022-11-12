import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './ContentBlog.module.scss';
import { DataUsers } from '~/layouts/Main';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

export default function ContentBlog() {
  const [getApiPost, setGetApiPost] = useState({});
  const [getApisComments, setGetApisComments] = useState([]);
  const apisUsers = useContext(DataUsers);

  let params = useParams();

  const getPostApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const infoPost = await data.json();
    setGetApiPost(infoPost);
    console.log(infoPost);
  };

  const getCommentsApis = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`);
    const infoComments = await data.json();
    setGetApisComments(infoComments);
    console.log(infoComments);
  };

  useEffect(() => {
    getPostApi();
    getCommentsApis();
  }, [params.postId]);

  return (
    <div
      className={cx('wrapper')}
      
    >
      <div className={cx('header')}>
        <div className={cx('user')}>
          <Image className={cx('avatar')} src={images.coNangNhiNhanh} alt="" />

          {apisUsers.map(
            (apiUser) => apiUser.id === getApiPost.userId && <div className={cx('username')}>{apiUser.username}</div>,
          )}
        </div>
      </div>
      <h1 className={cx('postid')}>{`Post title ${params.postId}`}</h1>
      <div className={cx('info')}>
        {apisUsers.map(
          (apiUser) =>
            apiUser.id === getApiPost.userId && (
              <div className={cx('author')}>
                <b>Author:</b> {apiUser.name}
              </div>
            ),
        )}
        <div className={cx('date')}>
          <b>Created at:</b> {Math.random() * 1000}
        </div>
      </div>
      <div className={cx('content')}>
        <b>Content:</b> {getApiPost.body}
      </div>
      <div className={cx('comments')}>
        <h3>Comments:</h3>
        {getApisComments.map((apiComment) => (
          <div className={cx('usercomment')}>
            <Image className={cx('avatar')} src={images.anhGaiXinh} alt="" />
            <div className={cx('infocomment')}>
              <b className={cx('usercomment')}>{apiComment.name}</b>
              <div className={cx('contentcomment')}>{apiComment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
