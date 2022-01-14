import styles from "./whoToFollow.module.scss";
import FollowBtn from "../followBtn";

const WhoToFollow = (e) => {

   const name = e.data.name;

    return (
        <div className={styles.container}>
        <div className={styles.nameAndTitle}>
        <img className="userImg" src={e.data.user_img}  alt="Profile img" width={50} height={50} />
        <div>
            <p>{name}</p>
            <p className={styles.subtitle}>@{name.toLowerCase()}</p>            
        </div>
        </div>
        <FollowBtn />
        </div>
    );  
}

export default WhoToFollow;