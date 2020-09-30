import React from 'react';
import UserPanel from '../UserPanel';
import UserInfo from '../UserInfo';
import UserForm from '../UserForm/index';

const UserBlockContainer = (props) => {
  return (
    <>
      <UserPanel/>
      <UserInfo 
        userData={props.userData}
      />
      <UserForm
        fullName={'papa'}
        email={'pipa@gmail.com'}
        phone={'8 880'}
        onChangeInfo={props.changeUserData}
      />
    </>
  );
}

export default UserBlockContainer;