import React, { Component } from "react";

export class NewsIteams extends Component {

 
  render() {
    let { title, description,imgurl,newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card ">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsurl}  target="_blank" className="btn btn-sm btn-dark">
              For more news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsIteams;
