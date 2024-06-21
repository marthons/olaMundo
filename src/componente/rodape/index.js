import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
        </footer>
    )
}