/**
 * Class Component
 */

import React, { Component } from 'react'

class Main extends Component {
    render() {
        var num = 10;
        var myStyle = {
            fontSize:20,
            color:'red'
        }
        return (
            <div>
                <h1 style={myStyle}>Sample My Style</h1>
                <h2>Hello World...</h2>
                <h2>The sum of 20 and 10 is {20 + 10}</h2>
                <p>{num = 10 ? 'True' : 'False'}</p>
                <input type='text' name='name'></input>
                <br></br>
            </div>
        );
    }
}

export default Main