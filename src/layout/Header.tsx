import { Link } from "react-router-dom";
import LogoTitle from "../components/LogoTitle";
import CustomizedSwitches from "../components/ButtonToggle";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [bgColor, setBgColor] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBgColor("#FFC4A4"); 
            } else {
                setBgColor("transparent"); 
            }
        };

       
        window.addEventListener("scroll", handleScroll);

        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "vi" : "en";
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="flex justify-around gap-12 max-w-screen-xl h-28 items-center sticky top-0 z-50"
            style={{ backgroundColor: bgColor }}
        >
            <div>
                <LogoTitle />
            </div>
            <div className="flex gap-10 text-xl">
                <Link to="/">{t("header.home")}</Link>
                <Link to="/about">{t("header.about")}</Link>
                <Link to="/portfolio">{t("header.portfolio")}</Link>
                <Link to="/contact">{t("header.contact")}</Link>
                <CustomizedSwitches />
                <Button
                    variant="outlined"
                    onClick={toggleLanguage}
                >
                    {currentLanguage === "en" ? "Vi" : "En"}
                </Button>
            </div>
        </div>
    );
};

export default Header;
