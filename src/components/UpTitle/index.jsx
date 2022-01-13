import styles from "./UpTitle.module.scss"

const UpTitle = ({name}) => {

    return (
        <div className={styles.container}><p>{name}</p></div>
    );
}

export default UpTitle;