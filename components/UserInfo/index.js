import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const UserInfo = () => {
  return (
    <Typography component='div'>
      <Box textAlign='justify'>
        <AlternateEmailIcon/>
        Ivanova@mail.com
      </Box>
      <Box textAlign='justify'>
        <PhoneIcon/>
        8-919-773-43-11
      </Box>
    </Typography>

  );
};

export default UserInfo;