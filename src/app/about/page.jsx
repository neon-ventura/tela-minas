import Nav from '../components/nav/Nav.jsx'
import '@/app/globals.css'
import styles from './About.module.css'
import Image from 'next/image.js'
import logoimg from '../../../public/about/img1.jpeg'
import Footer from '../components/footer/Footer.jsx'


export default function About() {
    return (
        <>
        <Nav/>
        <div className={styles.mainContent}>

            <section className={styles.mainSection}>
                <div className={styles.diamond}>
                    <Image src={logoimg} width={300} height={300} alt="Diamond Image" className={styles.imgDiamond}/>
                </div>
                <div className={styles.aboutTextContainer}>
                    <h1 className={styles.title}>Quem somos?</h1>

                    <div className={styles.diamondMobile}>
                        <Image src={logoimg} width={300} height={300} alt="Diamond Image" className={styles.imgDiamondMobile}/>
                    </div>

                    <p className={styles.aboutText}>Atuamos desde 2006 na cidade de Manhuaçu/MG, fruto de uma visão  empreendedora, ímpar de seus idealizadores, nasceu a Fábrica  Telaminas. Ao longo dos anos sempre na busca constante de sua própria superação, a empresa hoje se enquadra como um dos maiores  fabricantes de Telas e Alambrados do país.</p>
                    <p className={styles.aboutText}>A Telaminas apresenta soluções sob medida para as suas necessidades em  cercamento. Sempre com atendimento personalizado, desenvolve  trabalhos focados  em estabelecer uma parceria duradoura, para que junto com você, seja  possível realizar boas ações. Por esse e outros motivos, hoje a Telaminas  é conceituada no mercado de telas com foco total na qualidade e  excelência de seus produtos.</p>
                    <p className={styles.aboutText}>Procuramos melhorar continuamente nossos serviços para que nossos  clientes sintam-se satisfeitos e possam sempre contar com nosso  suporte.</p>
                </div>
            </section>
        </div>
        <Footer/>
        </>

    )
}