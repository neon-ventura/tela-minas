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
        <div className={styles.footer}>
            <div className={styles.asideL}>
                <Link href="#">
                    <Image src={logoimg} width={500} height={500} className={styles.logo}/>
                </Link>
                <div className={styles.iconsList}>
                    <Link href="#"><Image src={facebook} width={50} height={50} className={styles.imageLink}/></Link>
                    <Link href="#"><Image src={facebook} width={50} height={50} className={styles.imageLink}/></Link>
                    <Link href="#"><Image src={facebook} width={50} height={50} className={styles.imageLink}/></Link>
                    <Link href="#"><Image src={facebook} width={50} height={50} className={styles.imageLink}/></Link>
                </div>
                
            </div>
            <div className={styles.asideR}>
                <aside className={styles.linkPage}>
                    <Link href="#"><h1>Produtos</h1></Link>
                    <Link href="#">Alambrados</Link>
                    <Link href="#">Redes de proteção</Link>
                    <Link href="#">Sombrite</Link>
                    <Link href="#">Tela Hexagonal</Link>
                    <Link href="#">Acessórios</Link>
                </aside>

                <aside className={styles.linkPage}>
                    <Link href="#"><h1>Empresa</h1></Link>
                    <Link href="#">Contate-nos</Link>
                    <Link href="#">Sobre nós</Link>
                    <Link href="#">Obras Realizadas</Link>
                    <Link href="#">Testemunhas</Link>
                    <Link href="#">Avalie-nos no Google</Link>
                </aside>
            </div>

            <hr className={styles.line}/>

            <span className={styles.copy}>&copy; 2024 Tela Minas, Todos os direitos reservados.</span>
        </div>
    )
}