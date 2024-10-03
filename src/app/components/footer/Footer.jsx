import Image from "next/image"
import styles from './Footer.module.css'
import Link from "next/link"
import '@/app/globals.css'
import logoimg from '../../../../public/footer/telaminas-icon.png'
import facebook from '../../../../public/footer/facebook-icon.png'
import zap from '../../../../public/footer/zap-icon.png'
import ig from '../../../../public/footer/ig-icon.png'

export default function Footer(){
    return (
        <div className={styles.footerBody}>
            <div className={styles.footerHeader}>
                <Image src={logoimg} className={styles.logoimg} height={85}/>
            </div>
            <div className={styles.icons}>
                <Link href="#"><Image src={facebook} className={styles.icon} height={30}/></Link>
                <Link href="#"><Image src={zap} className={styles.icon} height={30}/></Link>
                <Link href="#"><Image src={ig} className={styles.icon} height={30}/></Link>
                <Link href="#"><Image src={facebook} className={styles.icon} height={30}/></Link>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionLeft}>
                    <span className={styles.sectionTitle}>Produtos</span>

                    <ul>
                        <li>Alambrados</li>
                        <li>Redes de Proteção</li>
                        <li>Sambrite</li>
                        <li>Tela Hexagonal</li>
                        <li>Acessórios</li>
                    </ul>
                </div>
                <div className={styles.sectionRight}>
                    <span className={styles.sectionTitle}>Empresa</span>

                    <ul>
                        <li>Contate nos</li>
                        <li>Sobre nós</li>
                        <li>Obras Realizadas</li>
                        <li>Testemunhas</li>
                        <li>Avalie-nos no Google</li>
                    </ul>
                </div>
            </div>

            <div className={styles.lineContainer}>
                <hr className={styles.line}/>
            </div>

            <div className={styles.copy}>
                <p>&copy; 2024 Tela Minas, Todos os direitos reservados.</p>
            </div>

        </div>
    )
}