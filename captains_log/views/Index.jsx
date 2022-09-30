const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Index extends React.Component {
    render() {
        const { logs } = this.props;

        return (
            <DefaultLayout title="Captain's Log" group="Logs">
                <div>
                    <h1>Captain's Log Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Log: <a href={`/logs/${log._id}`}>{log.title}</a> <br/>
                                    <button className="edit-button">
                                        <a href={`/logs/${log._id}/edit`} className="button-link">Edit</a>
                                    </button>

                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" id="delete-color"/>
                                    </form><br/>
                                    
                                </li>
                            )
                        })}
                        
                    </ul>

                    <nav id="creating">
                        <a href='logs/new'>Create a new log entry</a>
                    </nav>
                </div>
                </DefaultLayout>
        );
    }
}

module.exports = Index;