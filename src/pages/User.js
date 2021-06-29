import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      editAddress: false
    };
  }
  render() {
    const user = this.state.user;
    const address = this.state.editAddress ? <><input type="text" ></input><Button onClick={() => this.setState({editAddress: false})}>Save</Button></> :
        <><p>{user.address}</p> <Button onClick={() => this.setState({editAddress: true})}>edit</Button></>
    const a = <p>dfs</p>
    return (
      <Jumbotron>
        <Container>
          <h1>{user.name}</h1>
          {address}
             
      
        </Container>
      </Jumbotron>
    );
  }
}

export default User;
