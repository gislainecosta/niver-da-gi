import * as St from './styles';
import Pointer from '../../images/pointer.png';
import Car from '../../images/car.png';
import Parking from '../../images/parking.png';
import Moto from '../../images/moto.png';
import Bus from '../../images/bus.png';
import BusMap from '../../images/busmap.png';
import Clock from '../../images/clock.png';

export default function Localization() {
    return (
        <St.ContainerLocal>
            <St.ContainerTittle>
                <St.IconLocal src={Pointer} alt="Local" />
                <St.Tittle>Como chegar</St.Tittle>
            </St.ContainerTittle>

            <St.MainText>
                Rua Nossa Senhora Aparecida, 372. Edifício Golden Tower, salão de festas.
                Barreiros, São José
            </St.MainText>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3158004019815!2d-48.608545285428576!3d-27.583737228165315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952749d04cc11265%3A0x78978640351a5f59!2sR.%20Nossa%20Sra.%20Aparecida%2C%20372%20-%20Barreiros%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC%2C%2088117-020!5e0!3m2!1spt-BR!2sbr!4v1635889333596!5m2!1spt-BR!2sbr" 
                width="330" 
                height="260"
                style={{border: "0", marginBottom: "8vh"}}
                allowfullscreen=""
                loading="lazy"
            />

            <St.ContainerTittle>
                <St.IconSubTittle src={Car} alt="Carro" />
                <St.SubTittle>Para quem vai de carro</St.SubTittle>
            </St.ContainerTittle>

            <St.Text>
                É só seguir as instruções do Maps, porém não há estacionamento no prédio. 
                É perigoso estacionar na frente do prédio (os carros andam rápido nesta rua e podem bater no 
                seu veículo), assim vou assinalar os locais que vocês podem estacionar. A Igreja possui um 
                estacionamento, às vezes está aberto, às vezes fechado.
            </St.Text>

            <St.TextImage src={Parking} alt="Estacionamento"/>


            <St.ContainerTittle>
                <St.IconSubTittle src={Moto} alt="Moto" />
                <St.SubTittle>Para quem vai de moto</St.SubTittle>
            </St.ContainerTittle>

            <St.Text style={{ marginBottom: "8vh"}}>
                É só seguir as instruções do Maps, depenendo do número de motos, dá para colocar na nossa garagem 
                (já tem a nossa, acho que cabem mais 3), então só me mandar uma mensagem avisando.
            </St.Text>

            <St.ContainerTittle>
                <St.IconSubTittle src={Bus} alt="Ônibus" />
                <St.SubTittle>Para quem vai de busão</St.SubTittle>
            </St.ContainerTittle>

            <St.Text>
                A linha que passa aqui perto é a <span style={{ color: "#2DEFB1" }}>630 - Corredor Continente</span>, que sai da <span style={{ color: "#2DEFB1" }}>Plataforma B</span> do <span style={{ color: "#2DEFB1" }}>TICEN</span>.
                Peça para o cobrador para descer no ponto que fica no topo do morro da Avenida Atlântica, 
                daí é só continuar a subir a ladeira e no semáforo virar a direita (o ponto já é bem próximo do semáforo). 
                “Segue reto toda vida” até o prédio. Ah, não se esqueça que é feriado - horário de domingo
            </St.Text>

            <St.TextImage src={BusMap} alt="Mapa do ônibus" />

            <St.ContainerTittle>
                <St.IconClock src={Clock} alt="Horários" />
                <St.Link
                    href="https://www.consorciofenix.com.br/horarios/corredor-continente,630"
                    target="_blank"
                >
                    <span style={{ color: 'var(--dark-pink)'}}>Clique aqui</span> para ver os horários do Corredor Continente
                </St.Link>

            </St.ContainerTittle>
        </St.ContainerLocal>
    )
}