import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from './index.module.css';

const UserInfo = (props) => {
  return (
    <Typography
      className={styles['user-info']}
      component='div'
    >
      <Box
        className={styles['user-info__item']}
        textAlign='justify'
      >
        <AlternateEmailIcon
          className={styles['user-info__icon']}
        />
        <p className={styles['user-info__text']}>{props.userData.email}</p>
      </Box>
      <Box
        className={styles['user-info__item']}
        textAlign='justify'
      >
        <PhoneIcon
          className={styles['user-info__icon']}
        />
        <p className={styles['user-info__text']} >8-919-773-43-11</p>
      </Box>
    </Typography>

  );
};

export default UserInfo;