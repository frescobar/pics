import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };
  onFormSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
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
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <p style={{ textAlign: "center" }}>Results: {images.length} images</p>
      </div>
    );
  }
}
