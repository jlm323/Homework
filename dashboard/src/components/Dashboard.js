import SideBar from './SideBar';
import Reviews from './Reviews';
import Rating from './Rating';
import Visitors from './Visitors';
import Analysis from './Analysis';
import Data from './Data';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="container">
            <SideBar />
            <Reviews reviews={Data.Reviews}/>
            <Rating rating={Data.Rating}/>
            <Analysis analysis={Data.Analysis}/>
            <Visitors visitors={Data.Visitors}/>
            </div>
        </div>
    )
}

export default Dashboard;