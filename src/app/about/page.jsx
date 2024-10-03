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
            <h1 className={styles.title}>Quem somos?</h1>
            <div className={styles.imageContainer}>
                <div className={styles.diamondLayout}>
                    <Image src={logoimg} width={300} height={300} alt="Diamond Image" className={styles.diamondImage}/>
                </div>
            </div>
            <div className={styles.pAboutContainer}>
                <p className={styles.pAbout}>Atuamos desde 2006 na cidade de Manhuaçu/MG, fruto de uma visão  empreendedora, ímpar de seus idealizadores, nasceu a Fábrica  Telaminas. Ao longo dos anos sempre na busca constante de sua própria superação, a empresa hoje se enquadra como um dos maiores  fabricantes de Telas e Alambrados do país.</p>
                <p className={styles.pAbout}>A Telaminas apresenta soluções sob medida para as suas necessidades em  cercamento. Sempre com atendimento personalizado, desenvolve  trabalhos focados  em estabelecer uma parceria duradoura, para que junto com você, seja  possível realizar boas ações. Por esse e outros motivos, hoje a Telaminas  é conceituada no mercado de telas com foco total na qualidade e  excelência de seus produtos.</p>
                <p className={styles.pAbout}>Procuramos melhorar continuamente nossos serviços para que nossos  clientes sintam-se satisfeitos e possam sempre contar com nosso  suporte.</p>
            </div>
        </div>
        <Footer/>
        </>

    )
}




// Task Pedro:

// 1 - Fazer o design do about da empresa, seguindo o formato e a paletagem de cores do figma
// (TUDO RESPONSIVO - SEGUINDO MOBILE FIRST)

// 2 - Fazer a interação entre o item "Sobre nós" da Nav 
// (Ao clicar em sobre-nós, o site deve ser levado a /about)                                    PRONTO

// Obs: para visualizar as alterações, digita:  /about , na url                                     --------



// Criativo:

// 1 -  As imagens estarão na pasta public/about (para acessar não é necessário escrever public), exemplo: about/img1.jpeg
// 2 - Texto: 

// Atuamos desde 2006 na cidade de Manhuaçu/MG, fruto de uma visão  empreendedora, ímpar de seus idealizadores, nasceu a Fábrica  Telaminas. Ao longo dos anos sempre na busca constante de sua própria  superação, a empresa hoje se enquadra como um dos maiores  fabricantes de Telas e Alambrados do país. 
// A Telaminas apresenta soluções sob medida para as suas necessidades em  cercamento. Sempre com atendimento personalizado, desenvolve  trabalhos focados  em estabelecer uma parceria duradoura, para que junto com você, seja  possível realizar boas ações. Por esse e outros motivos, hoje a Telaminas  é conceituada no mercado de telas com foco total na qualidade e  excelência de seus produtos. 
// Procuramos melhorar continuamente nossos serviços para que nossos  clientes sintam-se satisfeitos e possam sempre contar com nosso  suporte.

// Boa sorte meu manin ;)