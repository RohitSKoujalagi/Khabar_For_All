import React from 'react'

function NewsItem(props) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                            <img  className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.content}</p>
                                <a href={props.readMore} className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
            
        </div>
    )
}

export default NewsItem
