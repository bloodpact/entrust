import React from 'react';
import NewsItem from './NewsItem'
import newsArray from '../../Misc/news.json'

function NewsList(props) {
    const [news, setNews] = React.useState([])
    React.useEffect(()=>{
        setNews(newsArray)
    },[])
    return (
        <div className='container'>
            <h1>Новости</h1>
            {newsArray.map(el=><NewsItem key={el.title} news={el}/>)}
        </div>
    );
}

export default NewsList;