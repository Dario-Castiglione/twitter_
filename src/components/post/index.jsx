import styles from "./post.module.scss"
import { formatDistance, subDays } from 'date-fns';
import { it } from 'date-fns/locale';

const post = (e) => {
    return(
        <div className={styles.container}>

            <div>
                <img src={e.data.user_img}  alt="image" width={50} height={50} />
            </div>

            <div>
                <p className={styles.name}>{e.data.name} 
                    <span>
                        {formatDistance(new Date(e.data.date), new Date(),{ 
                            addSuffix: true,
                            locale: it
                            })}
                    </span>
                </p>
                
                <p className={styles.content}>{e.data.content}</p>
                {e.data.img && <img className={styles.image} src={e.data.img} alt="immaggine" />}

            </div>

        </div>
    );
}
export default post;