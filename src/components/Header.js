import React from "react";

export default class Top extends React.Component {
  render() {
    return (
      <div className="ui menu">
        <a className="item"></a>
        <div className="right menu">
          <button classname="item">Favorites</button>
          <button className="item">Logout</button>
        </div>
      </div>
    );
  }
}
