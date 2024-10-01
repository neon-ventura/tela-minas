import Image from "next/image"
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className={`${styles.container} navbar navbar-expand-lg bg-body-tertiary`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><Image height={80} width={180} alt="imagem logo" src={'/nav/logo.png'}/></a>
                    <button className={`${styles.hamburguer} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <Image height={50} width={50} src={"/nav/barra-de-menu.png"}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className={`${styles.nav} navbar-nav`}>
                            <li className="nav-item">
                                <a className={`${styles.nav_a} nav-link active`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.nav_a} nav-link active`} href="#">Sobre nós</a>
                            </li>
                            <li className="nav-item">
                                <a className={`${styles.nav_a} nav-link active`} href="#">Contate nos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`${styles.nav_a} nav-link active dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produtos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sombreamento</a></li>
                                    <li><a className="dropdown-item" href="#">Telas Galvanizadas</a></li>
                                    <li><a className="dropdown-item" href="#">Outros</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}