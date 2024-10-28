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
                   <Image className={styles.img} src={'/products/alambradoG.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product_alam}>Alambrado Galvanizado</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/revestido.jpg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Alambrado Revestido</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/gradil.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Gradil</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/hexagonal.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Hexagonal</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/soldada.webp'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Soldada</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/ondulada.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Ondulada</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/mosquiteiro.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Mosqueteiro</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/sombreamento.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Sombreamento</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/moeda.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Chapa Moeda</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/Concertina.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Concertina</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/expandida.png'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Chapa Expandida</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/peneira.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Peneira</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/rede.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Rede de Proteção</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/arame-liso.webp'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Arame Liso</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/arame-farpado.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Arame Farpado</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
                <div className={styles.card}>
                   <Image className={styles.img} src={'/products/acessorios.jpeg'} width={300} height={300}/>
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Acessórios</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
            </div>
        </>
    )
}