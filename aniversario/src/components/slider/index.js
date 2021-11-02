import Slider from "react-slick";
import "./slick.css";

export default function SliderFantasy(props) {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "vestment-slider",
        autoplay: false,
        dotsClass: "dots-slick"
    };

    const sliderImages = props.images.map((img) =>{
        return <article>
            <img src={require(`../../images/fantasy/${img}.jpg`).default} alt="Exemplo de Fantasia" />
        </article>
    })

    return (
        <div className={"slick-container"}>
            <p className={"slick-tittle"}>{props.tittle}</p>
            <Slider {...settings}>
                {sliderImages}
            </Slider>
        </div>
    )
}
