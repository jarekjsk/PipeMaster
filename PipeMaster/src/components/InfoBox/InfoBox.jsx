import { Button } from '../Button/Button';
import styles from './InfoBox.module.css';


export function InfoBox({titel, text, button_text}) {
    return (
        <div className={styles.info_box}>
            <h3 className={styles.info_box__titel}>{titel}</h3>
            <p className={styles.info_box__text}>{text}</p>
            <Button name={button_text} />
        </div>
    )
}