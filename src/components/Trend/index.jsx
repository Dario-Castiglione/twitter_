import styles from "./trend.module.scss"
import { ReactComponent as DotMenuImg } from "../../img/dotMenu.svg";
const Trend = (e) => {

    return(
        <div className={styles.container}>
            <span className={styles.flexed}>
                <p className={styles.mainText}>
                    {e.data.argument}
                </p>
                <span><DotMenuImg height={20} width={20}/></span>
            </span>

            <p>{e.data.content}</p>
            <p className={styles.mainText}>{e.data.tweetCount} tweet</p>
        </div>
    );
}

export default Trend;