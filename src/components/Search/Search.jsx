import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

export default function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searchauthorblogs/${input}`);
    setInput('');
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <FaSearch className={cx('iconsearch')} />
        <form onSubmit={submitHandler}>
          <input
            className={cx('search')}
            type="text"
            value={input}
            placeholder="Search something"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}
