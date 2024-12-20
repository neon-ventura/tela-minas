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
                        <Image className={styles.icon_pc} width={250} height={250} src={"/home/certificado.png"} alt={"Icon Valores"} />
                        <Image className={styles.icon} width={100} height={100} src={"/home/certificado.png"} alt={"Icon Valores"} />
                    </div>
                    <p className={styles.p}>Qualidade Certificada</p>
                </div>
                <div data-aos="fade-up" className={styles.section}>
                    <p className={styles.p}>Atendimento Personalizado</p>
                    <div className={styles.diamond}>
                        <Image className={styles.icon_pc} width={210} height={210} src={"/home/person.png"} alt={"Icon Valores"} />
                        <Image className={styles.icon} width={90} height={90} src={"/home/person.png"} alt={"Icon Valores"} />
                    </div>
                </div>
                <div data-aos="fade-up" className={styles.section}>
                    <div className={styles.diamond}>
                        <Image className={styles.icon_pc} width={250} height={250} src={"/home/seguranca.png"} alt={"Icon Valores"} />
                        <Image className={styles.icon} width={100} height={100} src={"/home/seguranca.png"} alt={"Icon Valores"} />
                    </div>
                    <p className={styles.p_phone}>Compromisso <br /> com a <br /> Segurança</p>
                    <p className={styles.p_pc}>Compromisso com a Segurança</p>
                </div>
            </div>

            {/* Section Products */}

            <div className={styles.products}>
                <h1 className={styles.h1_product}> <Image className={styles.tela_icon} src={"/home/alambrado.png"} height={60} width={50} /> <Image className={styles.tela_icon_pc} src={"/home/alambrado.png"} height={80} width={70} /> Produtos</h1>
                <div className={styles.section_card}>
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card3.jpeg"} />
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card2.jpeg"} />
                    <Image data-aos="fade-up" className={styles.img_product} height={400} width={350} src={"/example/card1.jpeg"} />

                    <Image data-aos="flip-right" className={styles.img_product_pc} height={450} width={400} src={"/example/card3.jpeg"} />
                    <Image data-aos="flip-right" className={styles.img_product_pc} height={450} width={400} src={"/example/card2.jpeg"} />
                    <Image data-aos="flip-right" className={styles.img_product_pc} height={450} width={400} src={"/example/card1.jpeg"} />
                </div>
                <button className={styles.btn_product}>Ver Todos</button>
            </div>

            {/* Section About Us */}

            <div className={styles.about}>
                <h1 className={styles.h1_about}>Sobre nós</h1>
                <div className={styles.sections_about}>
                    <Image data-aos="flip-left" className={styles.video_about} src={"/about/img1.jpeg"} height={220} width={350} />
                    <Image data-aos="flip-left" className={styles.video_about_pc} src={"/about/img1.jpeg"} height={600} width={650} />
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
                </div>
                <button className={styles.btn_about}>Saiba Mais</button>
            </div>

            {/* Section Testimonials */}

            <div className={styles.testimonials_pc}>
                <h1 className={styles.h1_product}> <Image className={styles.tela_icon} src={"/home/alambrado.png"} height={60} width={50} /> <Image className={styles.tela_icon_pc} src={"/home/alambrado.png"} height={80} width={70} /> Testemunhos</h1>

                <div className={styles.section_cards_testimonials}>

                    <div className={styles.cardWtxt}>
                        <div data-aos="flip-left" className={styles.testimonials_card}>
                            <Image className={styles.img_testimonials} height={400} width={700} src={'/home/pvc_tes.png'} />
                        </div>
                        <div className={styles.text_testimonials}>
                            <p data-aos='fade-left' className={styles.txt_testimonials}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus sed iusto voluptas exercitationem aut sapiente vero molestias odio vel esse neque ex ducimus itaque fugiat beatae quibusdam, veritatis at!</p>
                        </div>
                    </div>

                    <div className={styles.cardWtxt}>
                        <div className={styles.text_testimonials}>
                            <p data-aos='fade-right' className={styles.txt_testimonials}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus sed iusto voluptas exercitationem aut sapiente vero molestias odio vel esse neque ex ducimus itaque fugiat beatae quibusdam, veritatis at!</p>
                        </div>
                        <div data-aos="flip-right" className={styles.testimonials_card}>
                            <Image className={styles.img_testimonials} height={400} width={700} src={'/home/protecao_tes.jpeg'} />
                        </div>
                    </div>

                    <div className={styles.cardWtxt}>
                        <div data-aos="flip-left" className={styles.testimonials_card}>
                            <Image className={styles.img_testimonials} height={400} width={700} src={'/home/alambrado_tes.png'} />
                        </div>
                        <div className={styles.text_testimonials}>
                            <p data-aos='fade-left' className={styles.txt_testimonials}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus sed iusto voluptas exercitationem aut sapiente vero molestias odio vel esse neque ex ducimus itaque fugiat beatae quibusdam, veritatis at!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.testimonials}>
                <h1 className={styles.h1_product}> <Image className={styles.tela_icon} src={"/home/alambrado.png"} height={60} width={50} /> <Image className={styles.tela_icon_pc} src={"/home/alambrado.png"} height={80} width={70} /> Testemunhos</h1>

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
                    <Image className={styles.img_brand} height={60} width={90} src={'/home/belgo.png'} />
                    <Image className={styles.img_brand} height={60} width={120} src={'/home/telaminas.png'} />
                    <Image className={styles.img_brand_pc} height={120} width={180} src={'/home/belgo.png'} />
                    <Image className={styles.img_brand_pc} height={120} width={240} src={'/home/telaminas.png'} />
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

                <div data-aos="fade-up" className={styles.container_qr_pc}>
                    <div className={styles.text}>
                        <p className={styles.qr_p}>Sua opinião é importante! <br /> Avalie-nos no Google.</p>
                        <p className={styles.qr_p}> Escaneie o QR code <br /> ou <br /> Clique Aqui</p>
                    </div>
                    <div className={styles.container_img_qr}>
                        <Image className={styles.img_qr} height={200} width={200} src={'/home/qr.png'} />
                    </div>
                </div>
            </div>
            <div className={styles.informations_pc}>
                <div data-aos="fade-up" className={styles.informations_item}>
                    <Image height={80} width={80} src={'/home/local_icon.png'} />
                    <p className={styles.informations_p}>Av. Pres. Tancredo Neves, 891 - Santa Terezinha, Manhuaçu - MG, 36904-076</p>
                </div>
                <div data-aos="fade-up" className={styles.informations_item}>
                    <Image height={80} width={80} src={'/home/time_icon.png'} />
                    <p className={styles.informations_p}>Segunda a Sexta: 7:30 - 18:00 <br />Sábado: 7:30 - 12:00</p>
                </div>
                <div data-aos="fade-up" className={styles.informations_item_zap}>
                    <Image height={80} width={80} src={'/home/zap_icon.png'} />
                    <p className={styles.informations_p}>+55 (33)3332-1740</p>
                </div>
            </div>

            <Footer />
        </>
    )
}