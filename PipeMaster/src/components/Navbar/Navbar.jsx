import style from './Navbar.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export function Navbar() {

    return (
        <>
          <nav className={style.nav_container}>
            <div className={style.nav_logo}>
                <img className={style.nav_img} src="/favicons/icon.webp" alt="ikona" />
                <p className={style.nav_titel}>PipeMaster</p>
            </div>
            <div className={style.nav_menu}>
              <Link to={'/'}><Button name='O nas'/></Link>
              <Link to={'/service'}><Button name='Serwis'/></Link>
              <Link to={'/contact'}><Button name='Kontakt'/></Link>
            </div>
          </nav>  

        </>

    )
}