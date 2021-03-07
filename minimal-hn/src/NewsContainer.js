import NewsCard from './NewsCard';
import React from 'react';

class NewsContainer extends React.Component {  
  
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }

  keepTopThirty(news){
    return news.slice(0,31);
  }

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(data => this.setState({
            news: this.keepTopThirty(data)
    }));
  }




  render(){
    return (
      <div id="newsContainer container">
        {this.state.news.map((item, index) => (
          <NewsCard newsId={item} key={index}/>
        ))}
      </div>
    );
  }
}

export default NewsContainer;
