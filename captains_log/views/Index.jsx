const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Index extends React.Component {
    render() {
        const { logs } = this.props;

        return (
            <DefaultLayout title="Captain's Log" group="logs">
                <div>
                    <h1>Captain's Log Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Log: <a href={`/logs/${log._id}`}>{log.title}</a><br/>
                                    
                                </li>
                            )
                        })}
                        
                    </ul>

                    <nav>
                        <a href='logs/new'>Create a new log entry</a>
                    </nav>
                </div>
                </DefaultLayout>
        );
    }
}

module.exports = Index;