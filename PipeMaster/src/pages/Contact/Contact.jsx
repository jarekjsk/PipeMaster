import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import styles from './Contact.module.css';
import { BackgroundDots } from '../../components/BackgroundDots/BackgroundDots';

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        if (!e.target.checkValidity()) {
            e.preventDefault(); // Zapobiega wysłaniu formularza, jeśli są błędy
            e.target.reportValidity(); // Wyświetla komunikaty walidacyjne przeglądarki
            return;
        }

        e.preventDefault(); // Tylko jeśli formularz jest poprawny

        console.log('Wysłano:', formData);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section>
            <BackgroundDots/>
            
            <header>
                <h1 className={styles.header}>Skontaktuj się z nami</h1>
                <p className={styles.description}>Umów się na spotkanie lub rozmowę z naszym zespołem.</p>
                
            </header>



            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.flex}>
                    <label>
                        <span>Imię</span>
                        <input className={styles.input} type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </label>

                    <label>
                        <span>Nazwisko</span>
                        <input className={styles.input} type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </label>
                </div>

                <label>
                    <span>Email</span>
                    <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>
                    <span>Numer kontaktowy</span>
                    <input className={styles.input} type="tel" name="phone" value={formData.phone} onChange={handleChange} inputMode="numeric" pattern="[0-9]+" title="Wpisz tylko cyfry" required />
                </label>

                <label>
                    <span>Wiadomość</span>
                    <textarea className={styles.input01} name="message" value={formData.message} onChange={handleChange} rows="6" required></textarea>
                </label>

                <Button name='Wyślij' type='submit' />
                {submitted && <p className={styles.successMessage}>Formularz został wysłany pomyślnie!</p>}
            </form>
        </section>
    );
}
