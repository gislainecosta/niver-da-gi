import * as St from './styles';
import Microphone from '../../images/microphone.png';
import InstaImg from '../../images/instagram.png';
import MicImg from '../../images/microphone2.png';
import Form from '../../components/form'

export default function Karaoke() {
    return (
        <St.ContainerKaraoke>
            <St.ContainerTittle>
                <St.IconKaraoke src={Microphone} alt="Karaokê" />
                <St.Tittle>Karaokê</St.Tittle>
            </St.ContainerTittle>

            <St.MainText>
                Teremos um Karaokê profissional das 17h até as 22h. Que eu saiba ninguém é profissional, 
                então não tenha vergonha! Eu mesma canto muito desafinado e vou cantar muito (muito mesmo) hehehe. 
                O legal é cantar junto, mas se quiser cantar sozinho(a) sinta-se à vontade!
            </St.MainText>

            <St.ContainerAboutKaraoke>
                <St.AboutKaraoke>
                    Conheça mais sobre a empresa que irá fornecer a estrutura para a nossa cantoria:
                </St.AboutKaraoke>

                <a href="https://www.instagram.com/janedonaria/">
                    <St.InstagramImg src={InstaImg} alt="Instagram" />
                </a>
            </St.ContainerAboutKaraoke>

            <St.Microphone src={MicImg} alt="Microfone" />

            <St.Musics>
                Eles possuem um catálogo bem completo de músicas para a nossa cantoria. Porém se existe alguma música 
                especial que você quer muito cantar, só preencher o formulário abaixo:
            </St.Musics>

            <Form />
        </St.ContainerKaraoke>
    )
}