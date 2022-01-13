import styles from "./NavItem.module.scss"

const NavItem = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                {props.img}
            </div>

            {props.item && <p>{props.item}</p>}

        </div>
    
        
    );
}

export default NavItem;