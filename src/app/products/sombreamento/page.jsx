"use client"

import Nav from "@/app/components/nav/Nav";
import styles from "../Products.module.css"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Alambrado() {

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
                <h1 className={styles.title}>Sombreamento</h1>
                <div data-aos="fade-up" className={styles.card}>
                    <Image className={styles.img} src={'/products/sombreamento.jpeg'} width={300} height={300} />
                    <div className={styles.txt_section}>
                        <p className={styles.title_product}>Sombreamento</p>
                        <button className={styles.btn1}>Comprar</button>
                        <button className={styles.btn2}>Sobre</button>
                    </div>
                </div>
            </div>




            <div className={styles.content_pc}>
            <div className={styles.left}>
                    <h1 className={styles.title_list}>Filtrar</h1>
                    <ul className={styles.list}>
                        <a href="/products">
                            <li className={styles.li}>Todos</li>
                        </a>
                        <a href="/products/alambrado">
                            <li className={styles.li}>Alambrado Galvanizado</li>
                        </a>
                        <a href="/products/alambradorevestido">
                            <li className={styles.li}>Alambrado Revestido</li>
                        </a>
                        <a href="/products/gradil">
                            <li className={styles.li}>Gradil</li>
                        </a>
                        <li className={styles.li}><a href="/products/exagonal">Tela Hexagonal</a>
                            
                        </li>
                        <a href="/products/soldada">
                            <li className={styles.li}>Tela Soldada</li>
                        </a>
                        <a href="ondulada">
                            <li className={styles.li}>Tela industrial ondulada</li>
                        </a>
                        <li className={styles.li}><a href="/products/mosqueteiro">Telas Mosqueteiros</a>
                            <ul className={styles.sublist}>
                                <a href="/products/mosqueteiro/plastico">
                                    <li className={styles.subLi}>Plástico</li>
                                </a>
                                <a href="/products/mosqueteiro/vidro">
                                    <li className={styles.subLi}>Fibra de vidro</li>
                                </a>
                                <a href="/products/mosqueteiro/aluminio">
                                    <li className={styles.subLi}>Alumínio</li>
                                </a>
                            </ul>
                        </li>
                        <a href="/products/sombreamento">
                            <li className={styles.li}>Sombreamento</li>
                        </a>
                        <a href="/products/chapamoeda">
                            <li className={styles.li}>Chapa Moeda</li>
                        </a>
                        <a href="/products/concertina">
                            <li className={styles.li}>Concertina</li>
                        </a>
                        <a href="/products/telapeneira">
                            <li className={styles.li}>Tela Peneira</li>
                        </a>
                        <a href="/products/rededeprotecao">
                            <li className={styles.li}>Rede de Proteção</li>
                        </a>
                        <li className={styles.li}><a href="/products/acessorios">Acessórios</a>
                            <ul className={styles.sublist}>
                                <a href="/products/acessorios/arameliso">
                                    <li className={styles.subLi}>Arame Liso</li>
                                </a>
                                <a href="/products/acessorios/aramefarpado">
                                    <li className={styles.subLi}>Arame Farpado</li>
                                </a>
                                <a href="/products/acessorios/prego">
                                    <li className={styles.subLi}>Prego</li>
                                </a>
                                <a href="/products/acessorios/grampo">
                                    <li className={styles.subLi}>Grampo</li>
                                </a>
                                <a href="/products/acessorios/luva">
                                    <li className={styles.subLi}>Luva</li>
                                </a>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>Sombreamento</h1>
                    <div data-aos="fade-up" className={styles.card}>
                    <Image className={styles.img} src={'/products/sombreamento.jpeg'} width={400} height={400} />
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