import Image from "next/image";
import styles from './Nav.module.css';
import logoimg from '../../../../public/nav/logo.png';

export default function Nav() {
    return (
        <>
            <div className={styles.content}>
                <nav className={`${styles.nav} navbar navbar-expand-lg bg-body-tertiary`}>
                    <div className={` container-fluid`}>
                        <a className="navbar-brand" href="#"><Image height={80} width={180} src={'/nav/logo.png'} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} aria-current="page" href="/">Pagina inicial</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} href="/about">Sobre nós</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} href="/contactus">Contate nos</a>
                                </li>
                                <button className={`${styles.btn_mobile} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Produtos
                                </button>
                                <div className="offcanvas offcanvas-start" tabIndex="1000" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Produtos</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className={`${styles.offcanvas} offcanvas-body`}>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Alambrado Galvanizado
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Alambrado Revestido
                                        </button>
                                        <div className={`${styles.drop} dropdown mt-3`}>
                                            <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                                Telas hexagonal
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Galinheiro </a></li>
                                                <li><a className="dropdown-item" href="#">Pinteiro </a></li>
                                                <li><a className="dropdown-item" href="#">Viveiro </a></li>
                                            </ul>
                                        </div>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Tela Soldada
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Tela industrial ondulada
                                        </button>
                                        <div className={`${styles.drop} dropdown mt-3`}>
                                            <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                                Telas mosqueteiros
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Plástico </a></li>
                                                <li><a className="dropdown-item" href="#">Fibra de vidro  </a></li>
                                                <li><a className="dropdown-item" href="#">Alumínio  </a></li>
                                            </ul>
                                        </div>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Sombreamento
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Chapa Moeda
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Concertina
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Chapa expandida
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Telas peneiras
                                        </button>
                                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Rede de proteção
                                        </button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className={`${styles.nav_pc} navbar navbar-expand-lg bg-body-tertiary`}>
                    <div className={`container-fluid`}>
                        <a className="navbar-brand" href="#"><Image height={80} width={200} src={'/nav/logo.png'} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} aria-current="page" href="/">Pagina inicial</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} href="/about">Sobre nós</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.link} nav-link active`} href="/contactus">Contate nos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <button className={`${styles.btn_pc} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Produtos</button>

                <div className={`${styles.offcanvas_top} offcanvas offcanvas-top`} tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 className={`${styles.products_pc} offcanvas-title`} id="offcanvasTopLabel">Produtos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`${styles.offcanvas_pc} offcanvas-body`}>
                        <div className={styles.items_pc}>
                            <div className={`${styles.drop} dropdown mt-3`}>
                                <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                    Telas hexagonal
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Galinheiro </a></li>
                                    <li><a className="dropdown-item" href="#">Pinteiro </a></li>
                                    <li><a className="dropdown-item" href="#">Viveiro </a></li>
                                </ul>
                            </div>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Alambrado Galvanizado
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Alambrado Revestido
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <div className={`${styles.drop} dropdown mt-3`}>
                                <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                    Telas mosqueteiros
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Plástico </a></li>
                                    <li><a className="dropdown-item" href="#">Fibra de vidro  </a></li>
                                    <li><a className="dropdown-item" href="#">Alumínio  </a></li>
                                </ul>
                            </div>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Tela Soldada
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Tela industrial ondulada
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Sombreamento
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Chapa Moeda
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Concertina
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Chapa expandida
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Telas peneiras
                            </button>
                            <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                                Rede de proteção
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <a href="https://api.whatsapp.com/send/?phone=553333321740&text&type=phone_number&app_absent=0">
                        <Image className={styles.icons_item} src={'/nav/zap_icon.png'} height={70} width={70} />
                    </a>
                    <a href="https://www.instagram.com/telaminasoficial/">
                        <Image className={styles.icons_item} src={'/nav/ig_icon.png'} height={70} width={70} />
                    </a>
                </div>
            </div>

        </>
    );
}
