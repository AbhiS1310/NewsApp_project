import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './loading.gif'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(0);
        var url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${API_KEY}&page=${page}&pagesize=${props.pagesize}`;
        var data = await fetch(url);
        props.setProgress(50);
        var parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
      updateNews();
    }, [])
    
    // const componentDidMount = ()=> {
    //     updateNews();
    // }
    // articles.concat(parsedData.articles)
    // const handlePrevClick = async () => {
    //     setPage(page-1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        props.setProgress(0);
        var url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=886960eb2088499e81c01e2abc72e434&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page+1);
        var data = await fetch(url);
        props.setProgress(50);
        var parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    return (
        <>
            <h1 className='text-center mt-5 mb-1 pt-3'>News Top Headlines 🚀 </h1>
            {loading && <div className='text-center my-3'><img src={Spinner} alt="..." /></div>}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div className='text-center my-3'><img src={Spinner} alt="..." /></div>}
            >
                <div className='container'>
                    <div className='row my-3'>
                        {articles.map((element) => {
                            return <NewsItem key={element.url} url={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News
