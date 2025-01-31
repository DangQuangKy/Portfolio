import { useTranslation } from "react-i18next";
import ContactForm from "../components/FormContact";

const Contact = () => {
    const { t } = useTranslation()
    return (
        <section>
            <h1 className="font-mono text-3xl text-center">{t("header.contact")}</h1>
            <div className="text-center mt-5">
                <h3>{t("contact.title")}</h3>
                <p>{t("contact.subTitle")}</p>
            </div>
            <ContactForm />
        </section>
    );
}

export default Contact;