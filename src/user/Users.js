import React, { Component } from 'react';
import User from './User';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'Kota', age: 23},
        {name: 'Jesse', age: 28},
        {name: 'Lino', age: 16},
        {name: 'Tex', age: 3},
        {name: 'Reef', age: 11}
      ],
      title: 'This is a title',
    };
  }


  becomeYounger = () => {
    const newState = this.state.users.map((user) => {
      if (user.age > 0) {
        if(user.age < 10) {
          user.age = 0;
          return user;
        } else {
          user.age -= 10;
          return user;
        }
      } else {
        user.age = 0;
        return user;
      }

    });

    this.setState({
      newState
    });
  }

  render() {
    return (
        <div>
            <h1>{this.state.title}</h1>
            <button onClick={this.becomeYounger}>Make us 10 years younger</button>
            <br/>
            <br/>
            {
              this.state.users.map((user) => {
                return <User name={user.name} age={user.age}></User>
              })
            }
        </div>
    );
  }
}

export default Users;
