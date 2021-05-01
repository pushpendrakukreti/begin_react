import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        if(this.props.name){
            return (
                <div>
                    <h2>Users Component is rendering here...</h2>
                    <h1>My Name is {this.props.name} and I am {this.props.age} years old.</h1>
                    {/* <User></User>
                    <User></User> */}
                </div>
            );
        } 
        else{
            return (
                <div>
                    <h1>My Name is INVALID and I am {this.props.age} years old.</h1>
                    {/* <User></User>
                    <User></User> */}
                </div>
            );
        }
    }
}

export default Users;