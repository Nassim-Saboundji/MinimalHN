import React from 'react';
import CommentContainer from './CommentContainer';

class NewsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsId:null,
            comments: [],
            visbility: "is-hidden",
            visibilityBtnTxt: "View Comments"
        }
    }
    
    makeCommentsVisible(){
        if(this.state.visbility === "is-hidden"){
            this.setState({visbility : "", visibilityBtnTxt: "Hide Comments"});  
        }else{
            this.setState({visbility : "is-hidden", visibilityBtnTxt: "View Comments"});
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            newsId: props.newsId + ".json",
            key: props.key
        };
    }

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.newsId)
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                url: data.url,
                comments: data.kids,
        }));
    }


    render(){
       return(
            <div className="container mx-3">
                <div className="section">
                    <h1 className="title">{this.state.title}</h1>
                    <a className="button is-danger" href={this.state.url} target="_blank" rel="noreferrer">Read the story</a>
                    <button className="button ml-3" onClick={() => this.makeCommentsVisible()}>{this.state.visibilityBtnTxt}</button>
                </div>
                <div className= "container mx-6">
                    <div className={this.state.visbility}>
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