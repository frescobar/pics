import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  render() {
    return (
      <div className="ui grid centered padded">
        <div className="six wide computer twelve wide mobile column ">
          <div className=" ui segment">
            <form className=" ui form">
              <div className="field">
                <label>Search Image</label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
