import React from 'react';
import Header from '../components/Header';
import UserBlockContainer from '../components/UserBlockContainer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  main__container: {
    padding: '17px 10px',
    backgroundImage: 'url("/background-mobile.svg")',
    backgroundRepeat: 'no-repeat',
  },
}));


const userData = {
  fullName: 'Мария Петровна',
  email: 'petrovnaStar@gmail.com',
  phone: '',
};

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.main__container}>
      <Header />
      <UserBlockContainer />
    </main>
  )
}

export default Home;
