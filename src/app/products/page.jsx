import Nav from "../components/nav/Nav";
import styles from "./Products.module.css"
import Image from "next/image";

export default function Products() {
    return (
        <>
            <Nav />
            <div className={styles.content}>
                <button class={`${styles.filter} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><Image src={'/products/filtro.png'} height={30} width={30}/> Filtrar</button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Produtos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class={`${styles.offcanvas} offcanvas-body`}>
                        <button class={`${styles.btn_of} btn btn-secondary`} type="button">
                            Todos
                        </button>
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
                <h1 className={styles.title}>Todos</h1>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/alambrado.avif'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Alambrado Galvanizado</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/revestido.jpg'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Alambrado Revestido</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/galinheiro.jpg'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Hexagonal Galinheiro</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/galinheiro.jpg'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Hexagonal Pinteiro</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/galinheiro.jpg'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Hexagonal Viveiro</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/soldada.webp'} width={150} height={230}/>
                    <div>
                        <p className={styles.title_product}>Soldada</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
            </div>
        </>
    )
}