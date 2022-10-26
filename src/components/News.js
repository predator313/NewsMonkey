import React, { Component } from "react";


import NewsIteams from "./NewsIteams";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

export class News extends Component {
  
  constructor(){
    super();

    this.state={
      articles:[],
      loding:false,
      page:1
    }
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b77d67d3b214c40a51a1fa422cdf55c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading:false} )
  }
  async componentDidMount(){
    this.updateNews();
  }
  handlerPrev=async ()=>{
    
    this.setState({page:this.state.page-1});
    this.updateNews();
  }
  handlerNext=async ()=>{
    this.setState({page:this.state.page+1});
    this.updateNews();
  }
 
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey top headlines</h2>
         
        {this.state.loding && <Spinner/>}


        <div className="row">
          {!this.state.loding && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsIteams title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between"> 
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlerPrev}>&larr;prev</button>
         <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlerNext}>next&rarr;</button>
         </div>
      </div>
    );
  }
}

export default News;
