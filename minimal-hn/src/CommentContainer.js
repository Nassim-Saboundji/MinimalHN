import React from 'react';

class CommentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentId: "",
      text: ""
    };
  }

  static getDerivedStateFromProps(props, state){
      return {
        commentId: props.commentId,
        key: props.key
      }
  }

  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/item/' + this.state.commentId + ".json")
        .then(response => response.json())
        .then(data => this.setState({ text: data.text}));    
  }
  
  render(){
        return (
          <div className="content card p-3 has-text-justified" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
          
        );
  }
}


export default CommentContainer;