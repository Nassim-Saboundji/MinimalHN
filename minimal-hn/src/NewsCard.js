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

    areThereKids(kids){
        console.log("The kids : " + kids);
        return kids;
    }

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.newsId + ".json")
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                url: data.url,
                comments: this.areThereKids(data.kids),
        }));
    }


    render(){
       return(
            <div className="container mx-3">
                <div className="section">
                    <h1 className="title">{this.state.title}</h1>
                    <div className="columns">
                        <div className="column is-2">
                            <a className="button" href={this.state.url} target="_blank" rel="noreferrer">Read The Story</a> 
                        </div>
                        <div className="column is-1">
                            <button className="button" onClick={() => this.makeCommentsVisible()}>{this.state.visibilityBtnTxt}</button> 
                        </div>
                    </div>
                </div>
                <div className= "container mx-5">
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