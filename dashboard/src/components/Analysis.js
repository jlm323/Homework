function Analysis(props) {
    return (
        <div className="analysis">
            <h4>Sentiment Analysis</h4>
            <p className="data">{props.analysis.pos}</p>
            <p className="data">{props.analysis.neu}</p>
            <p className="data">{props.analysis.neg}</p>
        </div>
    )
}

export default Analysis;