import React, { Component } from 'react';
import Users from './Users';
import User from './User';

class App extends Component {

  state = {
    title: 'User List',
    userList: [
      { name: 'PK', age: 23 }, 
      { name: 'AA', age: 24 },
      { name: 'CC', age: 11 },
      { name: 'MM', age: 66 }
    ]
  }
 
  doClickMe = () => {
    // alert('You clicked me!');
    const newState = this.state.userList.map((user) => {
      const usertemp = user;
      usertemp.age += 5;
      return usertemp;
    })
    this.setState({newState})
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>

        {/* Rendering Class/Stateful Component */}
        {/* <Users name="PK" age="24"></Users>
        <Users name="AK" age="24"></Users>
        <Users age="24"></Users> */}
        {/* Rendering Functional/Stateless Component */}

        {
          this.state.userList.map((user, i) => {
            return <Users name={user.name} age={user.age} key={i}></Users>
          })
        }

        <input type="button" onClick={this.doClickMe} value="Increased by 5"></input>

        {/* <User></User>
        <User></User> */}
      </div>
    );
  }
}

export default App;