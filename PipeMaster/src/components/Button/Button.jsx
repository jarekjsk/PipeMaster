import style from './Button.module.css';

export function Button({name, onClick}) {
    return (

        <>
            <button className={style.btn_btn} onClick={onClick}>{name}</button>
        </>
    )
}