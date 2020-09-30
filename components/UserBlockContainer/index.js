import React from 'react';
import PropTypes from 'prop-types';
import UserPanel from '../UserPanel';
import UserInfo from '../UserInfo';
import UserForm from '../UserForm/index';

class UserBlockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
    };

    this.handleFormOpen = this.handleFormOpen.bind(this);
  }

  renderContent() {
    if (!this.state.isFormOpen) {
      return (
        <UserInfo
          userData={this.props.userData}
        />
      )
    } else {
      return (
        <UserForm
          fullName={this.props.userData.fullName}
          email={this.props.userData.email}
          phone={this.props.userData.phone}
          onChangeInfo={this.props.changeUserData}
          handleFormOpen={this.handleFormOpen}
        />
      );
    }
  }

  handleFormOpen() {
    this.setState({
      isFormOpen: !this.state.isFormOpen
    })
  }

  render() {
    return (
      <>
        <UserPanel
          userData={this.props.userData}
          isFormOpen={this.state.isFormOpen}
          handleFormOpen={this.handleFormOpen}
        />
        {this.renderContent()}
      </>
    );
  }
};

UserBlockContainer.propTypes = {
  userData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    changeUserData: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserBlockContainer;