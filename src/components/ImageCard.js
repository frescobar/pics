import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    //create a ref and then asign it to the img tag in order to have acces to the dom
    this.ImageRef = React.createRef();
  }

  //when the component is mounted an enevent listener is asigned with a callback function(setSpan)
  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpan);
  }

  //the callback function is executed when the component is mounted
  //we can access to any property of the img, in this case the height (current.clientHeight)
  setSpan = () => {
    const height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={description} ref={this.ImageRef} />
      </div>
    );
  }
}
