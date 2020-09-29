import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import styles from './index.module.css';

const UserPanel = () => {
  return (
    <section className={styles['user-panel']}>
      {/* <h2>Блок пользователя</h2> */}
      <img
        className={styles['user-panel__image']}
        src='../avatar-default.svg'
        width='40'
        height='40'
        alt='Аватар пользователя'
      />
      <p className={styles['user-panel__name']}>Иванова Анна Михайловна</p>
      <IconButton>
        <CreateIcon />
      </IconButton>
    </section>
  );
};

export default UserPanel;