import Image from "next/image";
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            {/* Section Values */}

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

            {/* Section Products */}

            <div className={styles.products}>
                <h1 className={styles.h1_product}> <Image src={"/home/alambrado.png"} height={60} width={50}/> Produtos</h1>
                <div className={styles.section_card}>
                    <Image className={styles.img_product} height={300} width={300} src={"/example/card3.jpeg"}/>
                    <Image className={styles.img_product} height={300} width={300} src={"/example/card2.jpeg"}/>
                    <Image className={styles.img_product} height={300} width={300} src={"/example/card1.jpeg"}/>
                </div>
                <button className={styles.btn_product}>Ver Todos</button>
            </div>
        </>
    )
}