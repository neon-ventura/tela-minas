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
                                <button class={`${styles.btn_mobile} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Produtos
                                </button>
                                <div class="offcanvas offcanvas-start" tabindex="1000" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Produtos</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class={`${styles.offcanvas} offcanvas-body`}>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Alambrado Galvanizado
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Alambrado Revestido
                                        </button>
                                        <div class={`${styles.drop} dropdown mt-3`}>
                                            <button class={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                                Telas hexagonal
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Galinheiro </a></li>
                                                <li><a class="dropdown-item" href="#">Pinteiro </a></li>
                                                <li><a class="dropdown-item" href="#">Viveiro </a></li>
                                            </ul>
                                        </div>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Tela Soldada
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Tela industrial ondulada
                                        </button>
                                        <div class={`${styles.drop} dropdown mt-3`}>
                                            <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                                Telas mosqueteiros
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Plástico </a></li>
                                                <li><a class="dropdown-item" href="#">Fibra de vidro  </a></li>
                                                <li><a class="dropdown-item" href="#">Alumínio  </a></li>
                                            </ul>
                                        </div>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Sombreamento
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Chapa Moeda
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Concertina
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Chapa expandida
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                            Telas peneiras
                                        </button>
                                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
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

                <div class={`${styles.offcanvas_top} offcanvas offcanvas-top`} tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 className={`${styles.products_pc} offcanvas-title`} id="offcanvasTopLabel">Produtos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class={`${styles.offcanvas_pc} offcanvas-body`}>
                        <div className={styles.items_pc}>
                            <div class={`${styles.drop} dropdown mt-3`}>
                                <button class={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                    Telas hexagonal
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Galinheiro </a></li>
                                    <li><a class="dropdown-item" href="#">Pinteiro </a></li>
                                    <li><a class="dropdown-item" href="#">Viveiro </a></li>
                                </ul>
                            </div>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Alambrado Galvanizado
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Alambrado Revestido
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <div class={`${styles.drop} dropdown mt-3`}>
                                <button className={`${styles.btn_of} btn btn-secondary dropdown-toggle`} type="button" data-bs-toggle="dropdown">
                                    Telas mosqueteiros
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Plástico </a></li>
                                    <li><a class="dropdown-item" href="#">Fibra de vidro  </a></li>
                                    <li><a class="dropdown-item" href="#">Alumínio  </a></li>
                                </ul>
                            </div>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Tela Soldada
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Tela industrial ondulada
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Sombreamento
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Chapa Moeda
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Concertina
                            </button>
                        </div>
                        <div className={styles.items_pc}>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Chapa expandida
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Telas peneiras
                            </button>
                            <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                                Rede de proteção
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <Image className={styles.icons_item} src={'/nav/zap_icon.png'} height={70} width={70} />
                    <Image className={styles.icons_item} src={'/nav/ig_icon.png'} height={70} width={70} />
                </div>
            </div>

        </>
    );
}
