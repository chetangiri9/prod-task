import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import { Input } from "antd";

const { Search } = Input;

class SearchBar extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, orientation: "landscape" }
    });
    console.log(response);

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Search
          placeholder="input search text"
          size="large"
          onSearch={this.onSearchSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default SearchBar;
