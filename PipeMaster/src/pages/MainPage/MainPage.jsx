import styles from './MainPage.module.css';
import { InfoFrame } from '../../components/InfoFrame/InfoFrame';

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

            <article className={styles.articles_info}>
                <InfoFrame
                    img='/images/frame1.jpeg'
                    title='Szybkie naprawy'
                    text='Nasz zespół ekspertów hydraulików zapewnia szybkie i skuteczne naprawy, abyś mógł jak najszybciej wrócić do normalnego funkcjonowania. Od drobnych napraw po kompleksowe instalacje, jesteśmy do Twojej dyspozycji.'
                />
                <InfoFrame
                    img='/images/frame3.webp'
                    title='Eksperci w branży'
                    text='Nasz zespół składa się z certyfikowanych i doświadczonych hydraulików, którzy z pasją dostarczają najwyższej jakości usługi. Dzięki ich wiedzy i doświadczeniu możesz być pewien, że Twoje systemy wodno-kanalizacyjne są w dobrych rękach.'
                />
                <InfoFrame
                    img='/images/frame2.webp'
                    title='Przystępne ceny'
                    text='Uważamy, że naprawy hydrauliczne nie powinny nadwyrężać Twojego budżetu. Oferujemy konkurencyjne ceny na wszystkie nasze usługi, zapewniając wysoką jakość w przystępnej cenie. Dodatkowo, dzięki naszej przejrzystej polityce cenowej, nie musisz martwić się o ukryte opłaty.'
                />

            </article>
       </section>
       
       </> 
    )
}