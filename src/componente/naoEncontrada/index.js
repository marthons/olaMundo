import { useNavigate } from 'react-router-dom'
import BotaoPrincipal from '../botaoPrincipal'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'

export default function NaoEncontrada() {

    const navegar = useNavigate();

    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>
            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>
            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrafo}>
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            <div 
            className={styles.botaoContainer}
            onClick={() => navegar(-1)}
            >
                <BotaoPrincipal>Voltar</BotaoPrincipal>
            </div>
            <img
                className={styles.imagemCachorro}
                src={erro404}
                alt="Imagem de um cachorro"
            />
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
    )
}