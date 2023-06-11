import React from 'react'

const NewsItem = (props) => {
    var { url, title, description, imageUrl } = props;
    return (
        <div className='col-md-4 my-2'>
            <div className="card">
                <img src={imageUrl ? imageUrl : "https://images.indianexpress.com/2022/08/AMD-Ryzen-7000-series.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} rel='noopener noreferrer' target="_blank" className="btn btn-primary btn-sm">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
