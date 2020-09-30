import React from 'react';
import Header from '../components/Header';
import UserBlockContainer from '../components/UserBlockContainer';
import styles from '../styles/Home.module.css';

const userData = {
  fullName: 'Мария Петровна',
  email: 'petrovnaStar@gmail.com',
  phone: '',
};

const Home = () => {
  return (
    <main className={styles.main__container}>
      <Header />
      <UserBlockContainer />
    </main>
  )
}

export default Home;
