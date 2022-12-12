import './Home.css'
import '../Global.css'
import image1 from "../../assets/img-1.jpg"
import image2 from "../../assets/img-2.jpg"
import image3 from "../../assets/img-3.jpg"
import image4 from "../../assets/img-4.jpg"

export default function Home() {
    return (
        <div className="main">
        <ul className="navbar">
            <div className="nav-list">
                <li className="link"><a href="Home">Home</a></li>
                <li className="link"><a href="./Info/info">Información</a></li>
            </div>
        </ul>
        <h1 className="main_title">Visitá Villa General Belgrano</h1>
        <p className="text">Un pueblo con fiestas en donde las tradiciones se entremezclan con la buena gastronomía y la cordialidad de su gente</p>
            <div className="slider">
                <ul>
                    <li><img src={image1} alt="" /></li>
                    <li><img src={image2} alt="" /></li>
                    <li><img src={image3} alt="" /></li>
                    <li><img src={image4} alt="" /></li>
                </ul>
        </div>
        <section className="description">
            <p className="text">Algunos de los lugares destacados de la localidad, desde grandes construcciones hasta la más pura naturaleza</p>
        </section>
        <footer>
            <div className="footer-grid">
                <div className="col-left">
                    <h4 className="col-title">Sobre los autores</h4>
                    <p className="col-text">Somos dos programadores que estamos muy entusiasmados con aprender nuevas tecnologías y mejorar en el mundo de la informática.</p>
                </div>
                <div className="col-right">
                    <h5 className="col-subtitle">Contacta a Juan Ignacio</h5>
                    {/* <!-- <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook icon"></i></a> --> */}
                    <a href="https://github.com/" target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin icon"></i></a>

                    <h5 className="col-subtitle">Contacta a Shai</h5>
                    {/* <!-- <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook icon"></i></a> --> */}
                    <a href="https://github.com/" target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin icon"></i></a>
                </div>
            </div>
        </footer>
        <div className="copy-line">
            <p className="copy">Copyright© 2022 Juan Giacobbe and Shai Kohn || All rights reserved.</p>
        </div>
    </div>
    )
}