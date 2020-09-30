import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import styles from './index.module.css';

class UserPanel extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderButtons() {
    if (!this.props.isFormOpen) {
      return (
        <Button
          className={styles['user-panel__button-edit']}
          endIcon={<CreateIcon className={styles['user-panel__button-icon']} />}
          onClick={this.props.handleFormOpen}
          classes={{
            label: styles['user-panel__button-edit-label'], 
            endIcon: styles['user-panel__button-edit-icon'], 
          }}
        >
          РЕДАКТИРОВАТЬ
        </Button>
      )
    } else {
      return (
        <Button
          className={styles['user-panel__button-edit']}
          endIcon={<CloseIcon className={styles['user-panel__button-icon']} />}
          onClick={this.props.handleFormOpen}
          classes={{
            label: styles['user-panel__button-edit-label'], 
            endIcon: styles['user-panel__button-edit-icon'], 
          }}
        >
          ЗАКРЫТЬ
      </Button>  
      )
    }
  }

  render() {
    return (
      <section className={styles['user-panel']}>
        <img
          className={styles['user-panel__image']}
          src='../avatar-default.svg'
          width='40'
          height='40'
          alt='Аватар пользователя'
        />
        <p className={styles['user-panel__name']}>{this.props.userData.fullName}</p>
        {this.renderButtons()}
      </section>
    );
  }
};

UserPanel.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  handleFormOpen: PropTypes.func.isRequired,
};

export default UserPanel;