import styles from "./NavBar.module.scss"
import NavItem from "../NavItem";
import ButtonTweet from "../buttonTweet";
import { ReactComponent as TwitterImg } from "../../img/twitter.svg";
import { ReactComponent as HomeImg } from "../../img/home.svg";
import { ReactComponent as MessagesImg } from "../../img/messages.svg";
import { ReactComponent as NotificationImg } from "../../img/notification.svg";
import { ReactComponent as ProfileImg } from "../../img/profile.svg";
import { ReactComponent as ExploreImg } from "../../img/explore.svg";
import { ReactComponent as BookmarksImg } from "../../img/bookmarks.svg";
const imgSize = 30;
const navItem = [
    {
        name: "",
        img: <TwitterImg width={imgSize} height={imgSize} />
    },
    {
        name: "Home",
        img: <HomeImg width={imgSize} height={imgSize} />
    },
    {
        name: "Explore",
        img: <ExploreImg width={imgSize} height={imgSize} />
    },
    {
        name: "Messages",
        img: <MessagesImg width={imgSize} height={imgSize} />
    },
    {
        name: "Notification",
        img: <NotificationImg width={imgSize} height={imgSize} />
    },
    {
        name: "Bookmarks",
        img: <BookmarksImg width={imgSize} height={imgSize} />
    },
    {
        name: "Profile",
        img: <ProfileImg width={imgSize} height={imgSize} />
    }
]

const NavBar = (props) => {

    return (
        <div className={styles.container}>
            <ul>
                {navItem.map((element,index) => 
                    <NavItem img={element.img} key={index} item={element.name} />
                )}
                <ButtonTweet/>
            </ul>
           

        </div>
    );
}

export default NavBar;