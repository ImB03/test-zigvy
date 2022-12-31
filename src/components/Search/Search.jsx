import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Search.module.scss';
import { getInput } from './searchSlice';

const cx = classNames.bind(styles);

export default function Search() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.setInput.input);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searchauthorblogs/${input}`);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container input-group flex-nowra')}>
        <div className={cx('input-group-text')}>
          <FaSearch className={cx('iconsearch')} />
        </div>
        <form onSubmit={submitHandler} className={cx('form-control bg-dark')}>
          <input
            className={cx('search bg-dark text-light w-100')}
            type="text"
            value={input}
            placeholder="Search something"
            onChange={(e) => {
              dispatch(getInput(e.target.value));
            }}
          />
        </form>
      </div>
    </div>
  );
}
