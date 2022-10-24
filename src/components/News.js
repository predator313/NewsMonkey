import React, { Component } from "react";
import NewsIteams from "./NewsIteams";

export class News extends Component {
  article=[ 
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Hurricane Roslyn: Mexico braces for powerful storm",
      "description": "Meteorologists warn of dangerous storm surge and flooding in towns on Mexico's Pacific coast.",
      "url": "http://www.bbc.co.uk/news/world-latin-america-63361816",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/180EC/production/_127304589_888770fe-4663-414f-849d-9de63cb5d128.jpg",
      "publishedAt": "2022-10-23T04:37:25.61355Z",
      "content": "Towns along Mexico's Pacific coast are bracing for powerful Hurricane Roslyn, amid warnings that it could bring dangerous storm surges and flooding.\r\nThe Category 4 storm with winds up to 130mph (209… [+1153 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Cost of living: Why more Australians are giving up their pets",
      "description": "The cost of pet food has soared in Australia due to the pandemic and the Ukraine war.",
      "url": "http://www.bbc.co.uk/news/business-63071930",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/149BA/production/_127001448_charcoal.jpg",
      "publishedAt": "2022-10-23T03:52:22.7226603Z",
      "content": "\"It's quite a sad day when people have to make a choice of either feeding their animals or their children. For some people, sadly, it has got to that situation.\"\r\nSusan Talevski knows this well. Her … [+4857 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Iran protests: Huge rally in Berlin in support",
      "description": "About 80,000 people march in Germany's capital, in the biggest rally held so far by the Iranian diaspora.",
      "url": "http://www.bbc.co.uk/news/world-europe-63361813",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2666/production/_127303890_mediaitem127303889.jpg",
      "publishedAt": "2022-10-23T00:52:18.0927534Z",
      "content": "About 80,000 Iranians and their supporters have marched in Berlin, German police say, in solidarity with ongoing protests in Iran.\r\nSaturday's rally in the German capital is believed to have been the… [+1349 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "How the first report from Belsen shocked the world",
      "description": "In April 1945, the BBC’s Richard Dimbleby was the first reporter to enter the liberated Belsen concentration camp.",
      "url": "http://www.bbc.co.uk/news/stories-63317358",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/32EF/production/_127293031_p0d8mzpg.jpg",
      "publishedAt": "2022-10-23T00:07:20.6447222Z",
      "content": "In April 1945, the BBCs Richard Dimbleby was the first reporter to enter the liberated Belsen concentration camp. \r\nHis report describing the unimaginable horror he found, was the first time many lis… [+494 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC Sport",
      "title": "Red Bull co-owner Mateschitz dies aged 78",
      "description": "Red Bull co-owner Dietrich Mateschitz, a major global business figure as a result of his energy drinks empire, dies aged 78.",
      "url": "http://www.bbc.co.uk/sport/formula1/63100448",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CBAE/production/_126924125_gettyimages-1127802635.jpg",
      "publishedAt": "2022-10-22T21:52:27.7383302Z",
      "content": "Dietrich Mateschitz (left) congratulated Max Verstappen at the Austrian Grand Prix in 2018\r\nRed Bull co-owner Dietrich Mateschitz, a major global business figure as a result of his energy drinks empi… [+4655 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Sunak leads among Tory MPs but Johnson camp claims growing support",
      "description": "Sources planning ex-PM's possible campaign say he has 100 MPs behind him, but Rishi Sunak's supporters call for proof.",
      "url": "http://www.bbc.co.uk/news/uk-politics-63361384",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1801A/production/_127303389_389130e518842d62f48a5becec56f5b116a84769.jpg",
      "publishedAt": "2022-10-22T20:22:21.9734223Z",
      "content": "Rishi Sunak continues to forge ahead in the Conservative party leadership race, gathering the support of 127 MPs.\r\nBoris Johnson is currently in second place, with his campaign claiming he has the ba… [+3460 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ukraine war: Russia air strikes target more power facilities",
      "description": "Amid military reverses in the south, Russia continues its effort to cripple Ukraine's energy grid.",
      "url": "http://www.bbc.co.uk/news/world-europe-63357393",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/160BB/production/_127299209_30f8042c-649c-4fc1-a458-ce03ce37e865.jpg",
      "publishedAt": "2022-10-22T11:22:21.9587499Z",
      "content": "Air strikes have hit critical infrastructure in central and western Ukraine, as Russia continues to target the country's energy grid.\r\nSites to the south and west of Kyiv have been struck and power c… [+2081 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Steve Bannon sentencing: Jail term shows January 6 risks for Trump",
      "description": "This sentence for contempt of Congress comes as Donald Trump faces a subpoena from the same committee.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-63350291",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1167E/production/_127249217_gettyimages-632408944.jpg",
      "publishedAt": "2022-10-22T09:22:21.4724494Z",
      "content": "It's been a major day for the congressional committee investigating the January 6, 2021 attack on the US Capitol.\r\nOn Friday morning, a judge sentenced Steve Bannon, a former top adviser to Donald Tr… [+5364 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Whale's majestic move brings dramatic end to sea rescue",
      "description": "A marine crew battled for hours to free a humpback whale from fishing gear. Then they watched in awe as the giant did this.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-63353569",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D975/production/_127296655_p0d8rq2m.jpg",
      "publishedAt": "2022-10-21T21:52:18.5069286Z",
      "content": "After receiving multiple calls about a humpback whale entangled in 300ft (91m) of fishing gear and a buoy, Canadian officials dispatched a marine rescue team.\r\nThey tracked down the beleaguered whale… [+133 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Who is Giorgia Meloni? Italy's new far-right PM rise to the top",
      "description": "Politically active since she was a teenager, she has come to power partly by fortune.",
      "url": "http://www.bbc.co.uk/news/world-europe-63351655",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/45AF/production/_127293871_f5c332be6625e85a0a0bda06d829c3c7861dec2d0_27_3040_17101000x563.jpg",
      "publishedAt": "2022-10-21T20:37:22.9771147Z",
      "content": "Her rise to power at the head of the party she founded has been meteoric, but Giorgia Meloni has been politically active since she was a teenage activist in a neo-fascist party's youth wing in Rome.\r… [+5946 chars]"
    }]
  constructor(){
    // console.log("hello i am a constructor ");
    super();
    console.log("hello i am a constructor ");
    //this constructor is for news components there is 3 new items so it will gives 3 constructor
    this.state={
      article:this.article,
      //state is used to change dynamically
      loding:false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0b77d67d3b214c40a51a1fa422cdf55c"
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({article:parsedData.articles} ) //spelling is important here
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey top headlines</h2>

        <div className="row">
          {this.state.article.map((ele)=>{
            return <div className="col-md-4" key={ele.url}>
            <NewsIteams title={ele.title?ele.title.slice(0,80):""} description={ele.description?ele.description.slice(0,100):""} imgurl={ele.urlToImage} newsurl={ele.url} />



          </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;
