
function Visitors(props) {
    return(
        <div className="visitors">
            <h4>Website Visitors</h4>
            <p className="vis-data">{props.visitors}</p>
            <div className="graph">
                <img src="Graph.jpg" alt="graph"/>
            </div>
        </div>
    )
}

export default Visitors;