import React from 'react';
import CommentContainer from './CommentContainer';

class NewsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsId: null,
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
            newsId: props.newsId,
            key: props.key
        };
    }


    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.newsId + ".json")
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                url: data.url,
                comments: data.kids,
        }));
    }


    render(){
       return(
            <div className="container">

                <div className="rows is-centered">    
                <div className="row mt-3 text-is-justified">
                    <h1 className="title is-5 mx-3">{this.state.title}</h1>
                </div>
                <div className="row mt-3 text-is-justified">
                    <button className="button mx-3 text-is-justified is-danger" onClick={() => this.makeCommentsVisible()}>{this.state.visibilityBtnTxt}</button>
                    <a className="button mx-3 text-is-justified is-link" href={this.state.url} target="_blank" rel="noreferrer">Read Story</a>  
                </div>
                </div> 
                <div className= "container mt-3">
                    <div className={this.state.visbility}>
                        {this.state.comments === undefined ? console.log("empty") : this.state.comments.map((item, index) => (
                            <CommentContainer commentId={item} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
       ); 
    }
}

export default NewsCard;