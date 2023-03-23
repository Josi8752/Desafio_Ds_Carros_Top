import './styles.css';
import carImg from '../../assets/car.png';
import Header from '../../components/Header';
export default function CatalogCards() {
    return (
        <>
        <Header/>
            <main>
                <section id='section-cards-one'>
                    <div className='card-one'>
                        <h2>Venha nos visitar</h2>
                        <div>
                            <div>
                                <img src={carImg} alt="Carro" />
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='section-cards-two'>
                    <h3>O que estão dizendo</h3>
                    <div className="card-two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae harum voluptatem ad fugit id distinctio.</p>
                    </div>
                </section>
            </main>
            <footer>
                <div>
                    <div>
                        <a href="#">@dscarrostop</a>
                    </div>
                    <div>Rua da Pipoca, 150</div>
                </div>
            </footer>
        </>
    );

}