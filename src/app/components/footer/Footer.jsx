import Image from "next/image"
import styles from './Footer.module.css'
import Link from "next/link"
import '@/app/globals.css'
import logoimg from '../../../../public/footer/telaminas-icon.png'
import facebook from '../../../../public/footer/facebook-icon.png'

export default function Footer(){
    return (
        <div className={styles.footerBody}>
            <div className={styles.footerHeader}>
                <Image src={logoimg} className={styles.logoimg} height={85}/>
            </div>
            <div>
                <Image src={facebook} height={20}/>
                <Image src={facebook} height={20}/>
                <Image src={facebook} height={20}/>
                <Image src={facebook} height={20}/>
            </div>

        </div>
    )
}