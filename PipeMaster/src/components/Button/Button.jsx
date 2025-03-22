import style from './Button.module.css';

export function Button({name, onClick, type}) {
    return (

        <>
            <button type={type} className={style.btn_btn} onClick={onClick}>{name}</button>
        </>
    )
}