import React, { Component } from 'react';
import WorkPageHeader from '../WorkPageHeader/WorkPageHeader';
import '../../App.css';
import './WorkPageSingle.css';

class WorkPageSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }
  async componentDidMount() {
    const content = await this.getPostContent();
    console.log(content);
    this.setState({post: content.data.posts.edges[0].node})
  }
  
  async getPostContent(id) {
    let reqData = {
      "query": `{ 
        posts {
          edges {
            node {
              id
              title
              date
              author {
                id
                name
                username
                description
              }
            }
          }
        } 
      }`
    }

    let res = await fetch("https://api.piscatello.space/graphql", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(reqData)
    }).then(response => response.json());

    return res;
  }

  render() {
    return (
      <div className="work-page-single">
        <WorkPageHeader></WorkPageHeader>
        <section id="project-content">
          {this.state.post !== null ? <pre>{this.state.post.title}</pre>: ""}
        </section>
      </div>
    );
  }
}

export default WorkPageSingle;
