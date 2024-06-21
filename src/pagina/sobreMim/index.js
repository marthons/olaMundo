import PostModelo from "componente/postModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css'
import fotoMim from 'assets/eu-sem-fundo.png'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>

            </h3>
            <img
                className={styles.fotoSobreMim}
                src={fotoMim}
                alt=""
            />
            <p className={styles.paragrafo}>Olá, eu sou o Thon!</p>

            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Engenharia da Computação na UNIVESP e aluno feliz da Alura, onde estou me especializando em Front-end. Estou muito feliz de te ver por aqui.</p>

            <p className={styles.paragrafo}>Minha história com programação começou no ensino médio, quando comecei a explorar por conta própria as possibilidades que a tecnologia poderia oferecer. Eu aprendi lógica de programação e o básico de várias linguagens, como Java, Python, e JavaScript. Eu gostava muito de estudar programação, mas na época não tinha certeza de que trabalharia com isso no futuro.</p>

            <p className={styles.paragrafo}>No ensino superior, escolhi cursar Engenharia da Computação na Universidade Virtual do Estado de São Paulo (UNIVESP). Durante o curso, participei de vários projetos práticos e pude aplicar meus conhecimentos em situações reais. Um dos projetos mais significativos foi o desenvolvimento de um aplicativo para gerenciamento de tarefas, onde aprendi a trabalhar em equipe e a lidar com prazos apertados.</p>

            <p className={styles.paragrafo}>Foi durante a faculdade que decidi procurar um estágio em desenvolvimento de software. Encontrei uma oportunidade incrível na Alura, que me permitiu unir duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.</p>

            <p className={styles.paragrafo}>Na Alura, cada dia é uma nova oportunidade de aprendizado. Como aluno de Front-end, estou sempre envolvido em projetos desafiadores que me ajudam a crescer tanto pessoal quanto profissionalmente. A comunidade da Alura é incrível, com colegas e mentores sempre dispostos a ajudar e compartilhar conhecimentos. Sinto que estou no caminho certo para me tornar um desenvolvedor Front-end completo, graças a todo o suporte e recursos disponíveis.</p>

        </PostModelo>
    )
}