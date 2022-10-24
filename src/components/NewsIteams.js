import React, { Component } from "react";

export class NewsIteams extends Component {
 
  render() {
    let { title, description,imgurl,newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card " style={{ width: "18rem" }}>
          <img src={imgurl?imgurl:"https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1666600571.webp"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
              For more news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsIteams;
