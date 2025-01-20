import ContactForm from "../components/FormContact";

const Contact = () => {
    return ( 
        <section>
            <h1 className="font-mono text-3xl text-center">Contact</h1>
            <div>
                <h3>Let's Connect</h3>
                <p>Don't be a stranger! Say hello and let's collaborate</p>
                <ContactForm /> 
            </div>
        </section>
     );
}
 
export default Contact;