import React, { Component } from "react";
import NewsIteams from "./NewsIteams";
import Spinner from "./Spinner";

export class News extends Component {
  constructor(){
    // console.log("hello i am a constructor ");
    super();
    // console.log("hello i am a constructor ");
    //this constructor is for news components there is 3 new items so it will gives 3 constructor

    this.state={
      articles:[],
      loding:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0b77d67d3b214c40a51a1fa422cdf55c&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading:false} ) //spelling is important here
  }
  handlerPrev=async ()=>{
    console.log("prev button is clicked");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0b77d67d3b214c40a51a1fa422cdf55c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // console.log(this.state.page-1);
    this.setState({loading:true});

    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
      // article:parsedData.articles,
    } )
  }
  handlerNext=async ()=>{
    console.log("next button is clicked");
    if(this.state.page+1<=Math.ceil(this.state.totalResults/this.props.pageSize)){

      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0b77d67d3b214c40a51a1fa422cdf55c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      // console.log(this.state.page+1);
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles:parsedData.articles,
        page:this.state.page+1,
        loading:false
      } )
    }
  }
 
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey top headlines</h2>
         
        {this.state.loding && <Spinner/>}


        <div className="row">
          {!this.state.loding && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsIteams title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/10/25/1600x900/e27d0220-4edb-11ed-81f1-6f5beb428eb1_1666669602446_1666669602446_1666669655524_1666669655524.jpg"} newsurl={element.url}/>

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
