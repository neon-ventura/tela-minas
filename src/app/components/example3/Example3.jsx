import Nav from "../nav/Nav.jsx";
import styles from './Example3.module.css'

export default function Example3() {
    return (
        <>
            <Nav />
            <header className={styles.container}>
                <div className={styles.txt}>
                    <p className={styles.p}>Seja Bem Vindo(a)</p>
                    <h1 className={styles.h1}>Proteja oque é importante com a <br /> Tela Minas</h1>
                    <div className={styles.btns}>
                        <button className={styles.btn1}>Produtos</button>
                        <button className={styles.btn2}>Contate-nos</button>
                    </div>
                </div>
            </header>
        </>
    )
}