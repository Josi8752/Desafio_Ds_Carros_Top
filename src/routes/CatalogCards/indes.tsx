import './styles.css';
import Header from '../../components/Header';
import TitleSectionOne from '../../components/TitleSectionOne';
import SectionCardsTwo from '../../components/SectionCardsTwo';
import SectionCardsOne from '../../components/SectionCardsOne';
export default function CatalogCards() {
    return (
        <>
            <Header />
            <main>
                <section id='section-cards-one container'>
                    <TitleSectionOne />
                    <div className='card-one'>
                        <SectionCardsOne />
                        <SectionCardsOne />
                       
                    </div>
                </section>
                <section id='section-cards-two container'>
                    <div className='card-two'>
                        <SectionCardsTwo />
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