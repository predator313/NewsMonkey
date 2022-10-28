import React, { Component } from "react";

export class NewsIteams extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card ">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="  badge rounded-pill bg-danger">{source}</span>
          </div>

          <img
            src={
              !imgurl
                ? "https://cdn.zeebiz.com/sites/default/files/2022/10/26/207317-untitled-design-2022-10-20t204610903.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {author ? author : "unknown"} on {new Date(date).getDate()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              For more news
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsIteams;
