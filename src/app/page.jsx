import Example1 from "./components/example1/Exemple1";
import 'bootstrap/dist/css/bootstrap.min.css';
import Example2 from "./components/example2/Example2";
import Example3 from "./components/example3/Example3";
import styles from './page.module.css'
import Nav from "./components/nav/Nav";

export default function Home() {
  return (
    <>
      <h2 className={styles.h2}>Obs: Antes de visualizar os exemplos, certifique-se de estar usando um dispositivo móvel.</h2>

    <h1 className={styles.h1}>Exemplo 1</h1>
    <p>Neste exemplo a página inicial consiste em um vídeo onde mostra como é a empresa, tanto na fachada quanto a área de produção. <br /> (logo abaixo tem uma representação de um vídeo ilustrativo)</p>
    <Nav />
    <Example1 />
    <h1 className={styles.h1}>Exemplo 2</h1>
    <p>Neste exemplo a página inicial consiste em demonstrar diretamente o produto da empresa.</p>
    <p>(imagens da Tela Minas)</p>
    <Nav />
    <Example2 />
    <h1 className={styles.h1}>Exemplo 3</h1>
    <p>Neste exemplo a página inicial tem de como a mesma funcionalidade do exemplo 1, mas com imagem estática.</p>
    <p>(imagem da Tela Minas)</p>
    <Nav />
    <Example3 />
    </>
  );
}
