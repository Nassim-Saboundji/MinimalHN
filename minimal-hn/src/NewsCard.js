import React, { Fragment } from 'react';


class NewsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            link:"",
            comments:[]
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        return {
            title: props.title,
            link: props.link,
            comments: props.comments 
        };
    }

    render(){
       return(
            <Fragment>
                <h1>{this.state.title}</h1>
                <a href={this.state.link}>view link</a>
                <p>{this.state.comments}</p>
            </Fragment>
       ); 
    }
}

export default NewsCard;