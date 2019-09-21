import React from "react";
import ImageList from "../components/ImageList";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class ViewFavorites extends React.Component {
  state = {
    favorites: []
  };
  componentDidMount() {
    const favorites = window.localStorage.getItem("favorites");
    this.setState({ favorites: favorites ? JSON.parse(favorites) : [] });
  }
  render() {
    const { favorites } = this.state;
    return (
      <div style={{ marginTop: "50px" }}>
        <Navbar />
        {favorites.length ? (
          <div>
            <ImageList images={favorites} onlyFavorite={true} />{" "}
          </div>
        ) : (
          <div>
            No favorites exist. <Link to="/search">Go set some</Link>
          </div>
        )}
      </div>
    );
  }
}

export default ViewFavorites;
