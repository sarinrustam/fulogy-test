import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  userForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '254px',
    backgroundColor: 'white',
  },
  userForm__input: {
    padding: '0 0 10px 0',
  }
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.fullName,
      email: this.props.email,
      phone: this.props.phone,
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChangeFullname = this.handleChangeFullname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  handleChangeFullname(evt) {
    const value = evt.target.value;

    this.setState({
      fullName: value,
    });
  }

  handleChangeEmail(evt) {
    const value = evt.target.value;

    this.setState({
      email: value,
    });
  }

  handleChangePhone(evt) {
    const value = evt.target.value;
    console.log(value);
    this.setState({
      phone: value,
    });
  }

  handleSubmitButton(evt) {
    evt.preventDefault();
    const userData = {
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
    };
    console.log('Clicked');
    console.log(userData);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <form className={classes.userForm}>
        <TextField
          className={classes.userForm__input}
          id="fullname"
          label="Фамилия и имя"
          placeholder="Укажите ваши фамилию и имя"
          variant="outlined"
          defaultValue={this.state.fullName}
          onChange={this.handleChangeFullname}
        />
        <TextField
          className={classes.userForm__input}
          id="email"
          label="E-mail"
          placeholder="Ivanova@mail.ru"
          variant="outlined"
          defaultValue={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <TextField
          className={classes.userForm__input}
          id="phone"
          label="Номер телефона"
          placeholder="Укажите номер телефона"
          variant="outlined"
          defaultValue={this.state.phone}
          onChange={this.handleChangePhone}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          onClick={this.handleSubmitButton}
        >
            Сохранить изменения
        </Button>
      </form>
    );
  }
};

UserForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserForm);