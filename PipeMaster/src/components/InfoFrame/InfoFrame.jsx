import { Link } from 'react-router-dom';
import styles from './InfoFrame.module.css';
import { Button } from '../Button/Button';

export function InfoFrame({img, title, text, btnname1, btnrout1, btnname2, btnrout2}) {

    return (
        <article className={`${styles.main_article}  ${img ? styles.border_none : ''}`}>
                {img && (<img src={img} alt="image" />)}
                <h2 className={styles.main_title}>{title}</h2>
                <p className={styles.main_text}>{text}</p>
                <div className={styles.main_buttons}>
                    { btnname1 && btnrout1 && (
                        <Link to={btnrout1}><Button name={btnname1}/></Link>
                    )}

                    {btnname2 && btnrout2 && (
                        <Link to={btnrout2}><Button name={btnname2}/></Link>
                        )}
                    
                </div>
            </article>
    )
}