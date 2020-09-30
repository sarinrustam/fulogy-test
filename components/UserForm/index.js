import React from 'react';
import PropTypes from 'prop-types';
import useSwr from 'swr'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './index.module.css';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const fetcher = (url) => fetch(url).then((res) => res.json())

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.fullName,
      email: this.props.email,
      phone: this.props.phone,
      openAskModal: false,
      openSuccessModal: false
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChangeFullname = this.handleChangeFullname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAskModal = this.handleAskModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    const body = JSON.stringify({
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone
    });
  
    fetch('/api/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body
    }).then(response => response.json())
      .then(result => {
        localStorage.setItem('user', body);
        this.props.onChangeInfo(JSON.parse(body));
        this.handleAskModal();
        this.handleSuccessModal();
      }).catch((e) => {console.log('error')});
  }
  
  handleSuccessModal() {
    this.setState({
      openSuccessModal: !this.state.openSuccessModal
    });
  }
  
  handleAskModal() {
    this.setState({
      openAskModal: !this.state.openAskModal
    });
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
    this.handleAskModal();
  }

  render() {
    return (
      <>
        <form className={styles['user-form']}>
          <ul className={styles['user-form__wrapper']}>
            <li className={styles['user-form__item']}>
              <AssignmentIndIcon className={styles['user-form__icon']}/>
              <TextField
                className={styles['user-form__input']}
                id="fullname"
                label="Фамилия и имя"
                placeholder="Укажите ваши фамилию и имя"
                variant="outlined"
                defaultValue={this.state.fullName}
                onChange={this.handleChangeFullname}
              />
            </li>
            <li className={styles['user-form__item']}>
              <AlternateEmailIcon className={styles['user-form__icon']}/>
              <TextField
                className={styles['user-form__input']}
                id="email"
                label="E-mail"
                placeholder="Ivanova@mail.ru"
                variant="outlined"
                defaultValue={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </li>
            <li className={styles['user-form__item']}>
              <PhoneIcon className={styles['user-form__icon']}/>
              <TextField
                className={styles['user-form__input']}
                id="phone"
                label="Номер телефона"
                placeholder="Укажите номер телефона"
                variant="outlined"
                defaultValue={this.state.phone}
                onChange={this.handleChangePhone}
              />
            </li>
          </ul>
          <Button
            className={styles['user-form__button']}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            onClick={this.handleSubmitButton}
          >
            Сохранить изменения
        </Button>
        </form>
        <Dialog 
          aria-labelledby="modal" 
          open={this.state.openAskModal} 
          classes={{
            scrollPaper: styles['user-form__modal'], 
            paper: styles['user-form__modal-rounded']
          }}
        >
          <div className={styles['user-form__modal-wrap']}>
            <IconButton 
              className={styles['user-form__modal-button']}
              aria-label="закрыть"
              onClick={this.handleAskModal}
            >
              <CloseIcon className={styles['user-form__modal-icon']} />
            </IconButton>
            <p className={styles['user-form__modal-text']}>Сохранить изменения?</p>
            <Button 
              color="primary" 
              className={styles['user-form__modal-submit']} 
              variant="contained"
              onClick={this.submitForm} 
            >
              Сохранить
            </Button>
            <Button
             className={styles['user-form__modal-cancel']} 
             variant="outlined">
               Не сохранять
            </Button>
          </div>
        </Dialog>
        <Dialog
          aria-labelledby="succes-message"
          open={this.state.openSuccessModal}
          classes={{
            scrollPaper: styles['user-form__modal'], 
            paper: styles['user-form__modal-rounded']
          }}
        >
          <div className={styles['user-form__success']}>
            <p className={styles['user-form__success-text']}>Данные успешно изменены</p>
            <Button 
              color="primary"
              className={styles['user-form__success-button']}
              variant="contained"
              onClick={this.handleSuccessModal}
            >Хорошо</Button>
          </div>
        </Dialog>
      </>
    );
  }
};

UserForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default UserForm;