function Rating(props) {
    return(
        <div className="rating">
             <h4>Average Rating</h4>
             <p className="rating-data">{props.rating}</p>
        </div>
    )
}

export default Rating;