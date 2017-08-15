import React, { Component } from 'react';
import ArticleTeaser from './ArticleTeaser'

class ArticleList extends Component{
  render(){
    return(
      <div>
        { this.props.articles.map((article,index) => {
          return <ArticleTeaser handleTitleClick={this.props.handleTitleClick} key={index} id={index} title={article.title} created_date={article.created_date}/>
        }) }
      </div>
   )
  }
}

export default ArticleList