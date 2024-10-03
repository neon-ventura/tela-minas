import Image from "next/image"
import styles from './Nav.module.css'
import logoimg from '../../../../public/nav/logo.png' // tive que fazer isso, não consegui colocar a imagem de outro jeito hahahah foi mal

export default function Nav(){
    return (
        <nav className={`navbar navbar-expand-lg navbar-light`}>
            <div className={`${styles.navbar} container-fluid`}>
                <a className={styles.logo} href="/">
                    <Image className={styles.logoimg}src={logoimg} width={300} height={105}/>
                </a>
                <button className={`${styles.toggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Image height={50} width={50} src={"/nav/barra-de-menu.png"}/>
                </button>
                <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className={`${styles.nav_ul} navbar-nav me-auto mb-2 mb-lg-0`}>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contate nos</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Produtos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Sombreamento</a></li>
                            <li><a className="dropdown-item" href="#">Telas Galvanizadas</a></li>
                            <li><a className="dropdown-item" href="#">Outros</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}