import Image from "next/image";
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <div className={styles.values}>
                <div className={styles.section}>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={100} height={100} src={"/home/certificado.png"} alt={"Icon Valores"}/>
                    </div>
                    <p className={styles.p}>Qualidade Certificada</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.p}>Atendimento Personalizado</p>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={90} height={90} src={"/home/person.png"} alt={"Icon Valores"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.diamond}>
                        <Image className={styles.icon} width={100} height={100} src={"/home/seguranca.png"} alt={"Icon Valores"}/>
                    </div>
                    <p className={styles.p}>Compromisso <br /> com a <br /> Segurança</p>
                </div>
            </div>

            <div className={styles.products}>

            </div>
        </>
    )
}