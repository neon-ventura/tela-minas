"use client"

import Nav from "@/app/components/nav/Nav";
import styles from "../Products.module.css"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function RedeDeProtecao() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            once: true, // Se a animação deve ocorrer apenas uma vez
        });
    }, []);

    return (
        <>
            <Nav />
            <div className={styles.content}>
                <button className={`${styles.filter} btn btn-primary`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><Image src={'/products/filtro.png'} height={30} width={30} /> Filtrar</button>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Produtos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`${styles.offcanvas} offcanvas-body`}>
                        <button className={`${styles.btn_of} btn btn-secondary`} type="button">
                            Todos
                        </button>
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
                <h1 className={styles.title}>Rede de Proteção</h1>
                <div data-aos="fade-up" className={styles.card}>
                    <Image className={styles.img} src={'/products/rede.jpeg'} width={300} height={300} />
                    <div className={styles.txt_section}>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
            </div>




            <div className={styles.content_pc}>
                <div className={styles.left}>
                    <h1 className={styles.title_list}>Filtrar</h1>
                    <ul className={styles.list}>
                        <li className={styles.li}>Alambrado Galvanizado</li>
                        <li className={styles.li}>Alambrado Revestido</li>
                        <li className={styles.li}>Gradil</li>
                        <li className={styles.li}>Telas Hexagonal
                            <ul className={styles.sublist}>
                                <li className={styles.subLi}>Galinheiro</li>
                                <li className={styles.subLi}>Pinteiro</li>
                                <li className={styles.subLi}>Viveiro</li>
                            </ul>
                        </li>
                        <li className={styles.li}>Tela Soldada</li>
                        <li className={styles.li}>Tela industrial ondulada</li>
                        <li className={styles.li}>Telas Mosqueteiros
                            <ul className={styles.sublist}>
                                <li className={styles.subLi}>Plástico</li>
                                <li className={styles.subLi}>Fibra e vidro</li>
                                <li className={styles.subLi}>Alumínio</li>
                            </ul>
                        </li>
                        <li className={styles.li}>Sombreamento</li>
                        <li className={styles.li}>Chapa Moeda</li>
                        <li className={styles.li}>Concertina</li>
                        <li className={styles.li}>Tela Peneira</li>
                        <li className={styles.li}>Rede de Proteção</li>
                        <li className={styles.li}>Acessórios
                            <ul className={styles.sublist}>
                                <li className={styles.subLi}>Arame Liso</li>
                                <li className={styles.subLi}>Arame Farpado</li>
                                <li className={styles.subLi}>Prego</li>
                                <li className={styles.subLi}>Grampo</li>
                                <li className={styles.subLi}>Luva</li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>Rede de Proteção</h1>
                    <div data-aos="fade-up" className={styles.card}>
                        <Image className={styles.img} src={'/products/rede.jpeg'} width={400} height={400} />
                        <div className={styles.txt_section}>
                            <button className={styles.btn1}>Comprar</button>
                            <button className={styles.btn2}>Sobre</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}