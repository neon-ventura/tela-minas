import Nav from "../nav/Nav.jsx";
import styles from './Example1.module.css'

export default function Example1() {
    return (
        <>
            
            <Nav />
            <header className={styles.header}>
                <div className={styles.overlay}>
                    <p className={styles.p}>Seja Bem Vindo(a)</p>
                    <h1 className={styles.h1}>Proteja oque é importante com a <br /> Tela Minas</h1>
                    <div className={styles.btns}>
                        <button className={styles.btn1}>Produtos</button>
                        <button className={styles.btn2}>Contate-nos</button>
                    </div>
                </div>
                <video className={styles.video} src="/example/example1.mp4" loop autoPlay muted></video>
            </header>
        </>
    )
}
