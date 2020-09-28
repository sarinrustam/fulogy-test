import styles from '../styles/Home.module.css'
import UserForm from '../components/UserForm/index';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserForm/>
      </main>
    </div>
  )
}

export default Home;
