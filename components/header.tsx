import styles from "@/styles/styles.module.css"

const Header = () => {
    return(
        <nav className={styles.navbar}>
        <a className={styles.navbarBrand}> HOME </a>
      <ul className={styles.navbarNav}>
        <li className={styles.navbarItem}>
            <a href="/pages/ayuda" className={styles.navLink} >Ayuda</a>
        </li>
        <li className={styles.navbarItem}>
            <a className={styles.navLink} href="/pages/sesion">Sesion</a>
        </li>
      </ul>
    </nav>   
    )
}

export default Header;

