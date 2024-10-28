
import '@/app/globals.css'
import styles from './ProductModel.module.css'
import Image from 'next/image.js'
import logoimg from '../../../../public/about/img1.jpeg'

export default function ProductModel(){
    return (
        <>

            <div className={styles.main}>
                <h2 className={styles.productName}>Nome do Produto Nome do Produto Nome do Produto</h2>
                <div className={styles.diamond}>
                    <Image src={logoimg} width={300} height={300} alt="Diamond Image" className={styles.imgDiamond} />
                </div>
                <p className={styles.description}>A Concertina possui formato espiralizado composta por lâminas de
                aço cortantes, bem afiadas e pontiagudas.</p>
                
                <div className={styles.caracteristicas}>
                    <h6 className={styles.caracListTitle}>Principais Caracteristicas</h6>
                    <ul className={styles.caracList}>
                        <li className={styles.caracListItem}>Melhor custo benefício;</li>
                        <li className={styles.caracListItem}>Não necessita de energia elétrica;</li>
                        <li className={styles.caracListItem}>Redução no custo do seguro residencial;</li>
                        <li className={styles.caracListItem}>Proporciona maior segurança ao patrimônio.</li>
                    </ul>
                </div>

            </div>

        </>
    )
}