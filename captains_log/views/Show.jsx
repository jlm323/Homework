const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        // object destructuring
        const { log } = this.props;

        return (
            <DefaultLayout title={`${log.title}`} group="Logs">
            <div>
                <h1>Show Entry</h1>
                <p>
                    <span className="label-color">Title:</span> {log.title}
                </p>
                <p>
                    <span className="label-color">Entry:</span> {log.entry}
                </p>
                <p>
                    {log.shipIsBroken ? "The ship is not operational" : "The ship is operational"}.
                </p>

                <nav>
                    <a href="/logs" className="back-link">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;