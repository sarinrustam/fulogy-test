import React from 'react';
import Header from '../components/Header';
import UserBlockContainer from '../components/UserBlockContainer';
import styles from '../styles/Home.module.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Пушистый енот',
      email: 'pushistik@test.com',
      phone: '89197712222',
    };

    this.handlerChangeInfo = this.handlerChangeInfo.bind(this);
  }

  handlerChangeInfo = (body) => {
    this.setState({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
    });
  }

  render() {
    return (
      <main className={styles.main__container}>
        <Header
         userData={this.state}
        />
        <UserBlockContainer 
          userData={this.state}
          changeUserData={this.handlerChangeInfo}
        />
      </main>
    );
  }
}

export default Home;
