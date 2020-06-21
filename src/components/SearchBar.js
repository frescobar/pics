import React, { Component } from "react";
import "./SearchBar.css";
export default class SearchBar extends Component {
  state = {
    term: "",
  };
  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    this.setState({
      term: "",
    });
  };
  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Search here!"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
