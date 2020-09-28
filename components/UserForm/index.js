import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  userForm: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    width: '254px',
    backgroundColor: 'white',
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form>
      <TextField
        id="fullname"
        label="Фамилия и имя"
        placeholder="Укажите ваши фамилию и имя"
        variant="outlined"
      />
      <TextField
        id="email"
        label="E-mail"
        placeholder="Ivanova@mail.ru"
        variant="outlined"
      />
      <TextField
        id="phone"
        label="Номер телефона"
        placeholder="Укажите номер телефона"
        variant="outlined"
      />
    </form>
  );
};

export default Form;