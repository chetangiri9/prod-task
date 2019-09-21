import React from "react";
import SearchBarComponent from "../components/SearchBar";
import Navbar from "../components/Navbar";
import unsplash from "../api/unsplash";

class SearchBar extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, orientation: "landscape" }
    });
    console.log(response);

    this.setState({
      images: response.data.results.map((el, i) => ({
        url: el.urls.regular,
        description: el.description,
        id: el.id
      }))
    });
  };
  render() {
    const { images } = this.state;
    return (
      <div>
        <Navbar logout={this.logout} />
        <SearchBarComponent
          onSearchSubmit={this.onSearchSubmit}
          images={images}
        />
      </div>
    );
  }
}

export default SearchBar;
