// import Head from "next/head";
import styles from "@/styles/styles.module.css"
import Footer from "@/components/footer"

export default function Home() {
  return (
      <div className={styles.container}>
      {/*  <Head>
          <title>MI PAGINA WEB</title>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width-device-width, initial-scale=1, shrink-to-fit-no"/>
        </Head > */}

        {/* NAVBAR*/}
        <nav className={styles.navbar}>
          <a href="#" className={styles.navbarBrand}> HOME </a>
          <ul className={styles.navbarNav}>
            <li className={styles.navbarItem}>
              <a href="#" className={styles.navLink}>Ayuda</a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={styles.navLink}>  Sesion</a>
            </li>
          </ul>
        </nav>

        {/*CONTENIDO PRINCIPAL*/}
        <div className={styles.content}>
          <h1>Hola mundo</h1>
        </div>

        {/*Componente footer*/}
        <Footer>

        </Footer>

      </div>
    )
  }