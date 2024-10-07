import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import styles from "./Contactus.module.css"
import "@/app/globals.css"
import igLogo from "@/../public/contactus/ig-icon.png"

export default function Contactus(){
    return(
        <>
        <Nav/>
            <section className={styles.body}>
                <aside className={styles.aside}>
                    <h1>Contate-nos</h1>
                    <div className={styles.iconContainer}>
                        
                        <Link href="#" className={styles.link}>
                            <div className={styles.iconButton}>
                                <Image src={igLogo} width={50} height={50} className={styles.iconLogo}/>
                                <p>Instagram</p>
                            </div>
                        </Link>
                        <Link href="#" className={styles.link}>
                            <div className={styles.iconButton}>
                                <Image src={igLogo} width={50} height={50} className={styles.iconLogo}/>
                                <p>Instagram</p>
                            </div>
                        </Link>
                        <Link href="#" className={styles.link}>
                            <div className={styles.iconButton}>
                                <Image src={igLogo} width={50} height={50} className={styles.iconLogo}/>
                                <p>Instagram</p>
                            </div>
                        </Link>
                        <Link href="#" className={styles.link}>
                            <div className={styles.iconButton}>
                                <Image src={igLogo} width={50} height={50} className={styles.iconLogo}/>
                                <p>Instagram</p>
                            </div>
                        </Link>
                    </div>
                </aside>
                <form className={styles.form}>
                    <input type="text" className={styles.input} placeholder="Primeiro Nome" />
                    <input type="text" className={styles.input} placeholder="Ultimo Nome"/>
                    <input type="text" className={styles.input} placeholder="E-mail"/>
                    <input type="text" className={styles.input} placeholder="Número"/>
                    <textarea type="text" className={styles.inputMsg} placeholder="Deixe sua mensagem"/>
                    <button type="submit" className={styles.submit}>Enviar</button>
                </form>
            </section>
        <Footer/>
        </>
    )

}