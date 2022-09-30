const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        // object destructuring
        const { log } = this.props;

        return (
            <DefaultLayout title={`${log.title}`} group="logs">
            <div>
                <h1>Show Entry</h1>
                <p>
                    Title: {log.title}
                </p>
                <p>
                    Entry: {log.entry}
                </p>
                <p>
                    {log.shipIsBroken ? "The ship is broken" : "The ship is not broken"}.
                </p>

                {/* <button>
                    <a href={`/fruits/${fruit._id}/edit`}> Edit</a>
                </button> */}

                {/* <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form> */}

                <nav>
                    <a href="/logs">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;