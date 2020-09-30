import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import styles from './index.module.css';

const Header = (props) => {
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
        <p className={styles.header__name}>{props.userData.fullName}</p>
      </div>
      <div className={styles.header__breadcrumbs}>
        <h1 className={styles.header__title}>Личный профиль</h1>
        <Breadcrumbs aria-label='breadcrumbs'>
          <Link href='/' className={styles['header__breadcrumbs-item']}>
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

Header.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;