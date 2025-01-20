import { useTranslation } from "react-i18next";
import ContactForm from "../components/FormContact";

const Contact = () => {
    const { t } = useTranslation()
    return ( 
        <section>
            <h1 className="font-mono text-3xl text-center">Contact</h1>
            <div>
                <h3>{t("contact.title")}</h3>
                <p>{t("contact.subTitle")}</p>
                <ContactForm /> 
            </div>
        </section>
     );
}
 
export default Contact;