import React from "react";
import { Card, Icon } from "antd";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, favorite: false };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <Card
        hoverable
        cover={<img ref={this.imageRef} alt={description} src={urls.regular} />}
        actions={[
          <Icon type="star" key="favorite" onClick={this.state.favorite} />
        ]}
      />
    );
  }
}

export default ImageCard;
