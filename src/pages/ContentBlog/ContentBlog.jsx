import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ContentBlog.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { changeStateComment } from './contentBlogSlice';

const cx = classNames.bind(styles);

export default function ContentBlog() {
  const dispatch = useDispatch();
  const apiUsers = useSelector((state) => state.users.users);
  const showHideComment = useSelector((state) => state.showHideComment.showHideComment);
  const [getApiPost, setGetApiPost] = useState({});
  const [get2ApisComments, setGet2ApisComments] = useState([]);
  const [getAllApisComments, setGetAllApisComments] = useState([]);

  let params = useParams();

  const getPostApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const infoPost = await data.json();
    setGetApiPost(infoPost);
  };

  const getCommentsApis = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}&_limit=2`);
    const infoComments = await data.json();
    setGet2ApisComments(infoComments);
  };

  const getAllCommentsApis = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`);
    const infoAllComments = await data.json();
    setGetAllApisComments(infoAllComments);
  };

  useEffect(() => {
    getPostApi();
    getCommentsApis();
    getAllCommentsApis();
  }, [params.postId]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('user')}>
          <Image className={cx('avatar')} src={images.i29} alt="" />

          {apiUsers.map(
            (apiUser) =>
              apiUser.id === getApiPost.userId && (
                <div key={apiUser.id} className={cx('username')}>
                  {apiUser.username}
                </div>
              ),
          )}
        </div>
      </div>
      <h1 className={cx('postid')}>{`Post title ${params.postId}`}</h1>
      <div className={cx('info')}>
        {apiUsers.map(
          (apiUser) =>
            apiUser.id === getApiPost.userId && (
              <div key={apiUser.id} className={cx('author')}>
                <b>Author:</b> {apiUser.name}
              </div>
            ),
        )}
        <div className={cx('date')}>
          <b>Created at:</b> {}
        </div>
      </div>
      <div className={cx('content')}>
        <b>Content:</b> {getApiPost.body}
      </div>
      <hr />
      <h3>Comments:</h3>
      {showHideComment ? (
        <div className={cx('comments')}>
          {get2ApisComments.map((apiComment) => (
            <div key={apiComment.id} className={cx('usercomment')}>
              <Image className={cx('avatar')} src={images.d4} alt="" />
              <div className={cx('infocomment')}>
                <b className={cx('usercomment')}>{apiComment.name}</b>
                <div className={cx('contentcomment')}>{apiComment.body}</div>
              </div>
            </div>
          ))}
          <div className={cx('showhide-btn')}>
            <div className={cx('btn')} onClick={() => dispatch(changeStateComment())}>
              Show more
            </div>
          </div>
        </div>
      ) : (
        <div className={cx('comments')}>
          {getAllApisComments.map((apiComments) => (
            <div key={apiComments.id} className={cx('usercomment')}>
              <Image className={cx('avatar')} src={images.d4} alt="" />
              <div className={cx('infocomment')}>
                <b className={cx('usercomment')}>{apiComments.name}</b>
                <div className={cx('contentcomment')}>{apiComments.body}</div>
              </div>
            </div>
          ))}
          <div className={cx('showhide-btn')}>
            <div className={cx('btn')} onClick={() => dispatch(changeStateComment())}>
              Hide
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
