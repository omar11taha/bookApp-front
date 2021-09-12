import { Component } from "react";
import Button from "react-bootstrap/Button";
export default class LoginButton extends Component {
  render() {
   
    return (
      <Button
        style={{ color: "red", marginLeft: "30%" }}
        class="btn btn-light ms-3"
      >
        Login
      </Button>
    );
  }
}
