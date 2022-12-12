import './Info.css'
import '../Global.css'
import NavBar from '../NavBar/NavBar'

export default function Info() {
    return (
    <div className="main">
        <NavBar />
        <div className="video">
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/pyurxSPXM5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 className="sub_header">Video de la municipalidad de Villa General Belgrano</h3>
        </div>
        <section className="info">
            <div className="text-section">
                <h1 className="main_title">Villa General Belgrano, un lugar ideal</h1>
                <div className="infoContainer">
                    <h3 className="sub_header">Ubicación</h3>
                    <button onclick="toggleUbication()" id="ubicationButton">+</button>
                </div>
                <p id="ubication">En una región de altas montañas, de ríos caudalosos y de grandes lagos, en la región geográfica del Valle de Calamuchita,
                    se encuentra la Villa General Belgrano.
                </p>
                <div className="infoContainer">
                    <h3 className="sub_header">Clima</h3>
                    <button onclick="toggleClima()" id="climaButton">+</button>
                </div>
                <p id="clima">La localidad tiene un agradable clima templado, con una temperatura promedio anual de entre 15 y 17°C, aunque varia mucho la
                temperatura según la estación del año. Si te gusta el frío, Villa General Belgrano es una excelente lugar para visitar en invierno, ya que
                durante el invierno son comunes las heladas. Además, entre julio y agosto puede haber nevadas.
                </p>
                <div className="infoContainer">
                    <h3 className="sub_header">Fiesta Nacional de la Masa Vienesa</h3>
                    <button onclick="toggleFiesta1()" id="fiesta1Button">+</button>
                </div>
                <p id="fiesta1">La Fiesta Nacional de la Masa Vienesa es un clásico de Semana Santa. La buena gastronomía, chocolates y masas, variados espectáculos para toda la familia y un agradable clima otoñal, 
                son las claves para una propuesta distinta que ya lleva más de 40 años de tradición.
                </p>
                <div className="infoContainer">
                    <h3 className="sub_header">Fiesta Nacional de la Cerveza</h3>
                    <button onclick="toggleFiesta2()" id="fiesta2Button">+</button>
                </div>
                <p id="fiesta2"> En Villa General Belgrano, desde el primer sábado de octubre hasta el segundo fin de semana de ese mismo mes, cada año se celebra la Fiesta Nacional de la Cerveza, que es la versión argentina de la Oktoberfest de Múnich, Alemania. 
                Cada día de celebración comienza con el "Espiche", ceremonia que consiste en introducir en el barril de cerveza previamente agitado una canilla de madera, con la cual sale fuertemente la cerveza con espuma abundante que luego se reparte entre el público presente.
                Esta convocatoria festiva atrae a más de cien mil turistas durante dos fines de semana consecutivos.</p>
                <p>Para conocer más, <a target="_blank" href="http://www.villageneralbelgrano.net/historia-de-villa-general-belgrano/ ">Click aquí</a></p>
            </div>
        </section>
        <div className="mapContainer">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d54150.33174843472!2d-64.55589224999999!3d-31.9772861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1661729132774!5m2!1ses-419!2sar" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <footer>
            <div className="footer-grid">
                <div className="col-left">
                    <h4 className="col-title">Sobre los autores</h4>
                    <p className="col-text">Somos dos programadores que estamos muy entusiasmados con aprender nuevas tecnologías y mejorar en el mundo de la informática.</p>
                </div>
                <div className="col-right">
                    <h5 className="col-subtitle">Contacta a Juan Ignacio</h5>
                        <a href="https://github.com/juangiacobbe15" target="_blank"><i className="fab fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/juan-ignacio-giacobbe-578218227/" target="_blank"><i className="fab fa-linkedin icon"></i></a>
                    <h5 className="col-subtitle">Contacta a Shai</h5>
                        <a href="https://github.com/Shaikohn" target="_blank"><i className="fab fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/shai-kohn/" target="_blank"><i className="fab fa-linkedin icon"></i></a>
                </div>
            </div>
        </footer>
        <div className="copy-line">
            <p className="copy">Copyright© 2022 Juan Giacobbe and Shai Kohn || All rights reserved.</p>
        </div>
    </div>
    )
}