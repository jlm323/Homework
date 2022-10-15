function Reviews(props) {
    return(
        <div className="reviews">
            <h4>Reviews</h4>
            <p className="rev-data">{props.reviews}</p>
            <span className="read"> Click to read reviews:</span>
            <div className="pos-neg">
                <p className="pos">
                    Positive
                </p>
                <p className="neg">
                    Negative
                </p>
            </div>
        </div>
    )
}

export default Reviews;