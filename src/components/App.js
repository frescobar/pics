import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Header from "./Header";

export default class App extends Component {
  state = { images: [] };
  onFormSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 100 },

      headers: {
        Authorization: "Client-ID yOS72NAd6_K3xHOvUZ9SwLgMd1ene3RebCigOjrpphc",
      },
    });
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <>
        <Header />
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={images} />
      </>
    );
  }
}
