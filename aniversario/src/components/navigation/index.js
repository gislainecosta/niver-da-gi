import LinkMenu from '../links-menu';
import * as St from './styles';
import IconHome from '../../images/home.png';
import IconKaraoke from '../../images/microphone.png';
import IconVestment from '../../images/vestment.png';
import IconLocal from '../../images/pointer.png';

export default function Navigation() {
    return (
        <St.ContainerNavigator>
            <St.Navigator>
                <LinkMenu page={"home"} image={ IconHome } tittle={"Home"}/>
                <LinkMenu page={"karaoke"} image={ IconKaraoke } tittle={"Karaokê"} />
                <LinkMenu page={"o-que-vestir"} image={ IconVestment } tittle={"Vestimenta"} />
                <LinkMenu page={"local"} image={ IconLocal } tittle={"Como chegar"} />
            </St.Navigator>
        </St.ContainerNavigator>
    )
}