import styles from '../styles/Home.module.css'
import UserForm from '../components/UserForm/index';

const userData = {
  fullName: 'Мария Петровна',
  email: 'petrovnaStar@gmail.com',
  phone: '',
};

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserForm
          fullName={userData.fullName}
          email={userData.email}
          phone={userData.phone}
        />
      </main>
    </div>
  )
}

export default Home;
