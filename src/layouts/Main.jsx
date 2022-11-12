import { useState, useEffect, createContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Main.module.scss';
import Header from '~/components/Header';
import Search from '~/components/Search';
import Navbar from '~/components/Navbar';

const cx = classNames.bind(styles);
export const DataUsers = createContext();

export default function Main({ children }) {
  const [getApiUsers, setGetApiUsers] = useState([]);

  const getUsersApi = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const infoUsers = await data.json();
    setGetApiUsers(infoUsers);
  };

  useEffect(() => {
    getUsersApi();
  }, []);

  return (
    <DataUsers.Provider value={getApiUsers}>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('body')}>
          <Navbar />
          <div className={cx('container')}>
            <Search />
            <div className={cx('pages')}>{children}</div>
          </div>
        </div>
      </div>
    </DataUsers.Provider>
  );
}
