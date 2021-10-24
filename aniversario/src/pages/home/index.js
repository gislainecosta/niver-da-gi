import * as St from './styles';

export default function Home() {
    return (
        <St.ContainerHome>
            <section>
                <St.Tittle>Informações Gerais</St.Tittle>
                <St.Text>Dia: 15 de novembro</St.Text>
                <St.Text>Horário: 16:30</St.Text>
                <St.Text>Local: Barreiros. São José</St.Text>
                <St.Text>Vestimenta:  Memes da internet</St.Text>
                <St.Text>Trazer: O que for beber</St.Text>
                <St.Text>Presente: 1kg de ração para doação</St.Text>
            </section>

            <section>
                <St.Tittle>Atrações</St.Tittle>
                <St.Text>Karaokê - das 17 às 22h</St.Text>
                <St.Text>A famosa delirante mesa de brigadeiros</St.Text>
                <St.Text>Outras comidas de festa</St.Text>
            </section>
        </St.ContainerHome>
    )
}