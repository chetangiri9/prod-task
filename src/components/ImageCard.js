import React from "react";
import { Card, Icon } from "antd";
import "./ImageCard.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, favorite: false };
  }

  componentDidMount() {
    const { image } = this.props;
    const existingFavorites = window.localStorage.getItem("favorites");

    const favorites = JSON.parse(existingFavorites) || [];

    if (
      favorites.length &&
      favorites.findIndex(el => el.id === `${image.id}`) >= 0
    ) {
      this.setState({ favorite: true });
    }
  }

  setFavorite = () => {
    const { image } = this.props;
    const existingFavorites = window.localStorage.getItem("favorites");
    const favorites = JSON.parse(existingFavorites) || [];

    if (favorites.findIndex(el => el.id === `${image.id}`) >= 0) {
      window.localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter(el => el.id !== `${image.id}`))
      );
      this.setState({ favorite: false });
    } else {
      favorites.push(image);
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
      this.setState({ favorite: true });
    }
  };

  render() {
    const { favorite } = this.state;
    const { description, url } = this.props.image;

    const onlyFavorite = this.props.onlyFavorite;

    return onlyFavorite && !favorite ? (
      <React.Fragment />
    ) : (
      <Card
        style={{ position: "relative" }}
        hoverable
        cover={<img alt={description} src={url} />}
      >
        <Icon
          type="star"
          key="favorite"
          className={`icon__favorite ${favorite ? "true" : "false"}`}
          onClick={this.setFavorite}
        />
      </Card>
    );
  }
}

export default ImageCard;
