import React from 'react';

function NewsItem(props) {
    console.log(props.news.title)
    return (
        <div className=""> 
        <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{props.news.title}</span>
              <p>{props.news.news}</p>
            </div>
            <div className="card-action">
              <p>{props.news.date}</p>
            </div>
          </div>
        </div>
      </div>
      </div> 
    );
}

export default NewsItem;