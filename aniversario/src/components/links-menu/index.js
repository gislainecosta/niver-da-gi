import { useHistory } from 'react-router-dom';
import * as St from './styles';

export default function LinkMenu(props) {
    let history = useHistory();

    const goToPage = () => {
        history.push(props.page)
    }

    return (
        <St.Link onClick={goToPage}>
            <St.LinkImage src={props.image} alt={props.tittle}/>
            <St.LinkTittle>{props.tittle}</St.LinkTittle>
        </St.Link>
    )
}
