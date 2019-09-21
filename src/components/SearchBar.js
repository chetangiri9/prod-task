import React from "react";
import ImageList from "./ImageList";
import { Input } from "antd";
import "./SearchBar.css";

const { Search } = Input;

export default ({ onSearchSubmit, images }) => (
  <div className={`container__search--bar ${images.length ? "top" : "center"}`}>
    <div className="container__input--search">
      <Search
        placeholder="input search text"
        size="large"
        onSearch={onSearchSubmit}
      />
    </div>
    <div className="container__image--list">
      <ImageList images={images} />
    </div>
  </div>
);
