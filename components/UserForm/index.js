import React from 'react';
import PropTypes from 'prop-types';
import useSwr from 'swr';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './index.module.css';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import InputMask from "react-input-mask";

const fetcher = (url) => fetch(url).then((res) => res.json())

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: this.props.fullName,
      email: this.props.email,
      phone: this.props.phone,
      openAskModal: false,
      openSuccessModal: false,
      emailError: false,
      phoneError: false
    };

    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handleChangeFullname = this.handleChangeFullname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleAskModal = this.handleAskModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleSuccessModal = this.handleSuccessModal.bind(this);
  }

  submitForm() {
    const body = JSON.stringify({
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone
    });
  
    fetch('/api/user', {
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
    if (!this.state.openAskModal) {
     const regexEmail = /\S+@\S+\.\S+/;
     const emailValid = regexEmail.test(this.state.email);
    
     const regexPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
     const phoneValid = regexPhone.test(this.state.phone);
    
     this.setState({
      emailError: !emailValid,
      phoneError: !phoneValid
     });
    
     if (emailValid && phoneValid) {
      this.setState({
       openAskModal: true
      });
     }
    } else {
     this.setState({
      openAskModal: false
     });
    }
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
      emailError: false
    });
  }

  handleChangePhone(evt) {
    const value = evt.target.value;
    
    this.setState({
      phone: value,
      phoneError: false
    });
  }

  handleSubmitButton(evt) {
    evt.preventDefault();
    const userData = {
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
    };
  
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
                error={this.state.emailError}
                helperText={this.state.emailError ? 'Неправильный email' : ''}
              />
            </li>
            <li className={styles['user-form__item']}>
              <PhoneIcon className={styles['user-form__icon']}/>
              <InputMask
                mask="8 999 999 99 99"
                value={this.state.phone}
                maskPlaceholder="8 999 999 99 99"
                onChange={this.handleChangePhone}
                maskChar="-"
              >
                {() => <TextField
                  className={styles['user-form__input']}
                  id="phone"
                  label="Номер телефона"
                  placeholder="Укажите номер телефона"
                  variant="outlined"
                  error={this.state.phoneError}
                  helperText={this.state.phoneError ? 'Неправильный номер телефона' : ''}
                />}
              </InputMask>
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
             variant="outlined"
             onClick={this.props.handleFormOpen}
            >
               Не сохранять
            </Button>
          </div>
        </Dialog>
        <Dialog
          aria-labelledby="succes-message"
          open={this.state.openSuccessModal}
          onClick={this.props.handleFormOpen}
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
              onClick={this.props.handleFormOpen}
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