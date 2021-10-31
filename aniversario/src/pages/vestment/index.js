import * as St from './styles';
import Microphone from '../../images/vestment.png';
import Nazare from '../../images/nazare.png';
import DiCaprio from '../../images/dicaprio.png';
import SliderFantasy from '../../components/slider';

export default function Vestment() {
    return (
        <St.ContainerVestment>
            <St.ContainerTittle>
                <St.IconVestment src={Microphone} alt="Vestimenta" />
                <St.Tittle>Vestimenta</St.Tittle>
            </St.ContainerTittle>

            <St.IntoText>O tema da festa é <span style={{ color: "var(--dark-pink)" }}>memes</span>. Isso mesmo que você leu, <span style={{ color: "var(--dark-pink)" }}>MEMES</span>.</St.IntoText>

            <St.ContainerText>
                <St.QuestionText>Se você está se perguntando o que são memes, a titia Gi explica:</St.QuestionText>
                <St.ImageText src={Nazare} alt="Meme Nazaré" />
            </St.ContainerText>

            <St.ContainerText>
                <St.ImageAbout src={DiCaprio} alt="Meme Nazaré" />
                <St.AboutMeme>“Memes são virais na internet. Imagens, pessoas ou situações que foram compartilhadas milhares e milhares de vezes. “</St.AboutMeme>
            </St.ContainerText>

            <St.IntoText>
                Por isso coloque sua criatividade para trabalhar e pense naquele meme que será legal (e fácil de reproduzir)
            </St.IntoText>

            <St.Ideas>Ideias para você se inspirar</St.Ideas>

            <SliderFantasy tittle={"Nazaré Tedesco"} />
        </St.ContainerVestment>
    )
}