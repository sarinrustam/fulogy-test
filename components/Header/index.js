import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import styles from './index.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__menu}>
        <NotificationsNoneIcon className={styles.header__icon} />
        <div className={styles.header__wrapper}>
          <img
            className={styles.header__avatar}
            src='../avatar-default.svg'
            width='24'
            height='24'
            alt='Аватар пользователя'
          />
        </div>
      </div>
      <div className={styles.header__breadcrumbs}>
        <h1 className={styles.header__title}>Личный профиль</h1>
        <Breadcrumbs aria-label='breadcrumbs'>
          <Link href='/'>
            Главная
          </Link>
          <Link href='/'>
            Личный профиль
          </Link>
        </Breadcrumbs>
      </div>
    </section>
  );
};

export default Header;