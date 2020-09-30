import PropTypes from 'prop-types';
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
        <p className={styles['user-info__text']}>{props.userData.email ? props.userData.email : 'Укажите номер телефона'}</p>
      </Box>
      <Box
        className={styles['user-info__item']}
        textAlign='justify'
      >
        <PhoneIcon
          className={styles['user-info__icon']}
        />
        <p className={styles['user-info__text']}>{props.userData.phone ? props.userData.phone : 'Укажите номер телефона'}</p>
      </Box>
    </Typography>

  );
};

UserInfo.propTypes = {
  userData: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfo;