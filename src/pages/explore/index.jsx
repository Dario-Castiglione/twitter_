//import styles from "./explore.module.scss"
import TrendList from "../../components/TrendList";
import WhoToFollowList from "../../components/WhoToFollowList/WhoToFollowList";
import UpTitle from "../../components/UpTitle";
import HappeningList from "../../components/happeningList";
const Explore = () => {

    return(
        <>
        <div className="main">
            <UpTitle name={"Explore"} />
            <TrendList />
            <HappeningList />
            
        </div>

        <div className="sideContent">
            <WhoToFollowList />
        </div>
        </> 
    );
}

export default Explore;