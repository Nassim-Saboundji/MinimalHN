# Minimal Hacker News
React Frontend for Hacker News

I used the Hackernews API, React and the Bulma CSS Framework to build a minimalist version of Hacker News.

It contains only what is really essential. This means that it will show only the top stories and for each of those only the top level comments. This allows for someone to quickly get a gist of what is being said in the comments for each story without finding oneself
wasting too much time there.

Hosted [here](https://minimalhn.netlify.app/)

## About The Code
This Frontend relies on 3 main components :
- NewsContainer : Contains all the top stories.
- NewsCard :  Contains all the relevant information for a given story.
- CommentContainer :  Contains the code to display a comment.

NewsContainre calls NewsCard for each of the top stories.
NewsCard calls CommentContainer for each top level comment of a given story.

## How To Run
Like any React app you first `npm install` and then `npm start`.
