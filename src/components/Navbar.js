import React from "react";
import { withRouter } from "react-router";
import { Dropdown, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavItems = ({ logout }) => (
  <Menu>
    <Menu.Item key="0">
      <Link to="/search" />
      Search Images
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/favorites" />
      View Favorites
    </Menu.Item>
    <Menu.Item onClick={logout}>Logout</Menu.Item>
  </Menu>
);

class Navbar extends React.Component {
  state = {};
  logout = () => {
    window.localStorage.clear();
    this.props.history.push("/");
  };
  render() {
    return (
      <Dropdown
        overlay={<NavItems logout={this.logout} />}
        array={"click"}
        className="container__navbar"
      >
        <Button className="ant-dropdown-link" href="#">
          Menu <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}

export default withRouter(Navbar);
