import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Top from "./Header";
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
      <div>
        <div className="ui menu">
          <div className="right menu">
            <button className="negative ui button">Logout</button>
          </div>
        </div>
        <div>
          <Search
            placeholder="input search text"
            size="large"
            onSearch={this.onSearchSubmit}
          />
        </div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default SearchBar;
