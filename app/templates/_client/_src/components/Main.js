import React, { Component } from 'react';
import { Cell, Column, Table } from "@blueprintjs/table";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:[]
    }
}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ 
        user : users["user_list"] 
      }))
      .catch(
        err => console.log(err)
      )
  }

  render() {

    const users = this.state.user

    function userEmail (rowIndex: number) {
      console.log(rowIndex)
      return (
        <Cell>
          {users[rowIndex].email}
        </Cell>
      )  
    }

    function userName (rowIndex: number) {
      console.log(rowIndex)
      return (
        <Cell>
          {users[rowIndex].username}
        </Cell>
      )  
    }
    return (

      <div>
        <h4>Users</h4>
        <Table numRows={this.state.user.length}>
          <Column name="Email" cellRenderer={userEmail}/>
          
          <Column name="Username" cellRenderer={userName}/>
            
        </Table>
      </div>
    );
  }
}

export default Main;
