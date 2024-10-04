"use client"

import Image from "next/image";
import styles from './Home.module.css'
import Footer from "../components/footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS
import { useEffect } from "react";
import Example1 from "../components/example1/Exemple1";
import Nav from "../components/nav/Nav";

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação
            once: true, // Se a animação deve ocorrer apenas uma vez
        });
    }, []);

    return (
        <>
            <Nav />
            <Example1 />

            {/* Section Values */}

            <div className={styles.values}>
                <div data-aos="fade-up" className={styles.section}>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={100} height={100} src={"/home/certificado.png"} alt={"Icon Valores"} />
                    </div>
                    <p className={styles.p}>Qualidade Certificada</p>
                </div>
                <div data-aos="fade-up" className={styles.section}>
                    <p className={styles.p}>Atendimento Personalizado</p>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={90} height={90} src={"/home/person.png"} alt={"Icon Valores"} />
                    </div>
                </div>
                <div data-aos="fade-up" className={styles.section}>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={100} height={100} src={"/home/seguranca.png"} alt={"Icon Valores"} />
                    </div>
                    <p className={styles.p}>Compromisso <br /> com a <br /> Segurança</p>
                </div>
            </div>

            {/* Section Products */}

            <div className={styles.products}>
                <h1 className={styles.h1_product}> <Image src={"/home/alambrado.png"} height={60} width={50} /> Produtos</h1>
                <div className={styles.section_card}>
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card3.jpeg"} />
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card2.jpeg"} />
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card1.jpeg"} />
                </div>
                <button data-aos="fade-up" className={styles.btn_product}>Ver Todos</button>
            </div>

            {/* Section About Us */}

            <div className={styles.about}>
                <h1 className={styles.h1_about}>Sobre nós</h1>
                <Image data-aos="flip-left" className={styles.video_about} src={"/home/video.png"} height={200} width={350} />
                <div className={styles.section_data}>
                    <div className={styles.data}>
                        <h2 data-aos="zoom-out" className={styles.h2_data}>+1000</h2>
                        <p data-aos="zoom-out">Clientes Satisfeitos</p>
                    </div>
                    <div className={styles.data}>
                        <h2 data-aos="zoom-out" className={styles.h2_data}>+18</h2>
                        <p data-aos="zoom-out">Anos de Estabelecimento</p>
                    </div>
                    <div className={styles.data}>
                        <h2 data-aos="zoom-out" className={styles.h2_data}>+500</h2>
                        <p data-aos="zoom-out">Projetos Feitos</p>
                    </div>
                </div>
                <button className={styles.btn_about}>Saiba Mais</button>
            </div>

            {/* Section Testimonials */}

            <div className={styles.testimonials}>
                <h1 className={styles.h1_product}> <Image src={"/home/alambrado.png"} height={60} width={50} /> Testemunhos</h1>

                <div className={styles.section_cards_testimonials}>
                    <div data-aos="flip-left" className={styles.testimonials_card}>
                        <Image className={styles.img_testimonials} height={200} width={350} src={'/home/pvc_tes.png'} />
                    </div>
                    <div data-aos="flip-right" className={styles.testimonials_card}>
                        <Image className={styles.img_testimonials} height={200} width={350} src={'/home/protecao_tes.jpeg'} />
                    </div>
                    <div data-aos="flip-left" className={styles.testimonials_card}>
                        <Image className={styles.img_testimonials} height={200} width={350} src={'/home/alambrado_tes.png'} />
                    </div>
                </div>
            </div>

            <div className={styles.brands}>
                <div className={styles.brand_row}>
                    <div className={styles.row}></div>
                    <div className={styles.text_center}>Marcas</div>
                    <div className={styles.row}></div>
                </div>

                <div className={styles.brands_img}>
                    <Image height={60} width={90} src={'/home/belgo.png'} />
                    <Image height={60} width={120} src={'/home/telaminas.png'} />
                </div>
            </div>

            {/* Local */}

            <div className={styles.local}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.039973332113!2d-42.02692082476406!3d-20.25717688120603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb027d7aebc94b%3A0xfe3233915e6dec2!2sTelaminas%20Telas%20e%20Alambrados!5e0!3m2!1spt-PT!2sbr!4v1727998460006!5m2!1spt-PT!2sbr" width="600" height="450" loading="lazy"></iframe>
                <div className={styles.informations}>
                    <div data-aos="fade-up" className={styles.informations_item}>
                        <Image height={50} width={50} src={'/home/local_icon.png'} />
                        <p className={styles.informations_p}>Av. Pres. Tancredo Neves, 891 - Santa Terezinha, Manhuaçu - MG, 36904-076</p>
                    </div>
                    <div data-aos="fade-up" className={styles.informations_item}>
                        <Image height={50} width={50} src={'/home/time_icon.png'} />
                        <p className={styles.informations_p}>Segunda a Sexta: 7:30 - 18:00 <br />Sábado: 7:30 - 12:00</p>
                    </div>
                    <div data-aos="fade-up" className={styles.informations_item_zap}>
                        <Image height={50} width={50} src={'/home/zap_icon.png'} />
                        <p className={styles.informations_p}>+55 (33)3332-1740</p>
                    </div>

                    <div data-aos="fade-up" className={styles.container_qr}>
                        <div className={styles.text}>
                            <p className={styles.qr_p}>Sua opinião é importante! <br /> Avalie-nos no Google.</p>
                            <p className={styles.qr_p}> Escaneie o QR code <br /> ou <br /> Clique Aqui</p>
                        </div>
                        <div className={styles.container_img_qr}>
                            <Image className={styles.img_qr} height={120} width={120} src={'/home/qr.png'} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}