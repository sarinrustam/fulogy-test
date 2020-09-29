import UserPanel from '../UserPanel';
import UserInfo from '../UserInfo';
import UserForm from '../UserForm/index';

const UserBlockContainer = () => {
  return (
    <>
      <UserPanel/>
      <UserInfo/>
      <UserForm
        fullName={'papa'}
        email={'pipa@gmail.com'}
        phone={'8 880'}
      />
    </>
  );
};

export default UserBlockContainer;