import React from 'react';
import CommentContainer from './CommentContainer';

class NewsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsId:null,
            comments: [],
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        return {
            newsId: props.newsId + ".json",
        };
    }

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.newsId)
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                url: data.url,
                comments: data.kids
        }));
    }


    render(){
       return(
            <div className="container">
                <div className="section">
                    <h1 className="title">{this.state.title}</h1>
                    <a className="button is-danger" href={this.state.url} target="_blank" rel="noreferrer">Read the story</a>
                    <button className="button ml-3">View Some Comments</button>
                </div>
                <div className="section">
                    <div className="">
                    {this.state.comments.map((item, index) => (
                        <CommentContainer commentId={item} key={index}/>
                    ))}
                    </div>
                </div>
            </div>
       ); 
    }
}

export default NewsCard;