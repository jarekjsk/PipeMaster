import styles from './MainPage.module.css';
import { InfoFrame } from '../../components/InfoFrame/InfoFrame';
import { FeatureBox } from '../../components/FeatureBox/FeatureBox';
import { BackgroundDots } from '../../components/BackgroundDots/BackgroundDots';
import { InfoBox } from '../../components/InfoBox/InfoBox';

export function MainPage(){
    return(
       <>
       <section className={styles.main_info}>
            <InfoFrame
                title='Naprawa instalacji w mgnieniu oka'
                text='PipeMaster to profesjonalna firma hydrauliczna oferująca kompleksowe usługi w zakresie instalacji, napraw i konserwacji systemów wodno-kanalizacyjnych. Nasz zespół ekspertów jest gotowy, aby sprostać wszystkim Twoim potrzebom hydraulicznym.'
                btnname1='Skontaktuj się'
                btnrout1='/contact'
                btnname2='Dowiedz się więcej'
                btnrout2='/service'          
            />

            <img className={styles.main_img} src="/images/foto-on-main.webp" alt="kran" />


            <InfoFrame 
                title='Ekspresowa wymiana rur.'
                text='Wymień uszkodzone rury w rekordowym czasie dzięki naszej ekspresowej usłudze wymiany rur, zapewniając, że Twoje systemy działają jak nowe.'
            />
            <BackgroundDots/>
            <article className={styles.articles_info}>
                <FeatureBox
                    img='/images/frame1.jpeg'
                    title='Szybkie naprawy'
                    text='Nasz zespół ekspertów hydraulików zapewnia szybkie i skuteczne naprawy, abyś mógł jak najszybciej wrócić do normalnego funkcjonowania. Od drobnych napraw po kompleksowe instalacje, jesteśmy do Twojej dyspozycji.'
                />
                <FeatureBox
                    img='/images/frame3.webp'
                    title='Eksperci w branży'
                    text='Nasz zespół składa się z certyfikowanych i doświadczonych hydraulików, którzy z pasją dostarczają najwyższej jakości usługi. Dzięki ich wiedzy i doświadczeniu możesz być pewien, że Twoje systemy wodno-kanalizacyjne są w dobrych rękach.'
                />
                <FeatureBox
                    img='/images/frame2.webp'
                    title='Przystępne ceny'
                    text='Uważamy, że naprawy hydrauliczne nie powinny nadwyrężać Twojego budżetu. Oferujemy konkurencyjne ceny na wszystkie nasze usługi, zapewniając wysoką jakość w przystępnej cenie. Dodatkowo, dzięki naszej przejrzystej polityce cenowej, nie musisz martwić się o ukryte opłaty.'
                />

            </article>
            
            <article className={styles.service_article}>
                <p className={styles.service_text}>Eksperci w instalacjach wodno-kanalizacyjnych</p>
                <h2 className={styles.service_heading}>Profesjonaliści w naprawach hydraulicznych.</h2>
                <h3 className={styles.service_title}>Naprawa instalacji</h3>
                <p className={styles.service_text}>Usługa polega na naprawie lub wymianie uszkodzonych elementów instalacji wodno-kanalizacyjnych, które mogły ulec awarii z powodu zużycia lub uszkodzeń mechanicznych.</p>
                <h3 className={styles.service_title}>Wymiana rur</h3>
                <p className={styles.service_text}>Z czasem rury mogą się zużywać i wymagać wymiany. Oferujemy usługę wymiany rur, aby zapewnić prawidłowe działanie systemów wodno-kanalizacyjnych.</p>
                <h3 className={styles.service_title}>Diagnostyka</h3>
                <p className={styles.service_text}>Usługa polega na dokładnym sprawdzeniu instalacji w celu zidentyfikowania i naprawy wszelkich ukrytych problemów, co pozwala na prawidłowe i efektywne funkcjonowanie systemu.</p>
            </article>

            <article className={styles.img_container}>
                <img className={styles.main_image} src="/images/bathroom.webp" alt="" />
                <div className={styles.img_secondary__container}>
                <img className={styles.secondary_img} src="/images/img_invoice.webp" alt="" />
                <img className={styles.secondary_img} src="/images/bathroom2.webp" alt="" />
                </div>
            </article>

            <InfoBox
            titel='Dołącz do zadowolonych klientów PipeMaster.'
            text='“PipeMaster to świetna firma, z którą warto współpracować. Polecam każdemu, kto potrzebuje profesjonalnych usług hydraulicznych.” - Mia Young'
            button_text='Skontaktuj się'

            />


       </section>
       
       </> 
    )
}