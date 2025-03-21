import styles from './FeatureBox.module.css';


export function FeatureBox({img, title, text}) {

    return (
        <article className={`${styles.main_article}  ${img ? styles.border_none : ''}`}>
                {img && (<img src={img} alt="image" />)}
                <h2 className={styles.main_title}>{title}</h2>
                <p className={styles.main_text}>{text}</p>
            </article>
    )
}