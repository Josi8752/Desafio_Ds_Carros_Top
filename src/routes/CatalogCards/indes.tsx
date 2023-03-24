import './styles.css';
import Header from '../../components/Header';
import TitleSectionOne from '../../components/TitleSectionOne';
import SectionCardsTwo from '../../components/SectionCardsTwo';
import SectionCardsOne from '../../components/SectionCardsOne';
import TitleSectionTwo from '../../components/TitleSectionTwo';
export default function CatalogCards() {
    return (
        <>
            <Header />
            <main>
                <section id='section-cards-one '>
                    <TitleSectionOne />
                    <div className='card-one container'>
                        <SectionCardsOne />
                        <SectionCardsOne />
                       
                    </div>
                </section>
                <section id='section-cards-two'>
                    <div className='card-two container'>
                        <TitleSectionTwo/>
                        <div className='container-cards-two'>
                        <SectionCardsTwo />
                        <SectionCardsTwo />
                        <SectionCardsTwo />
                        <SectionCardsTwo />
                        <SectionCardsTwo />
                        </div>
                      
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