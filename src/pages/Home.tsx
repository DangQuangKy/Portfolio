import { useTranslation } from "react-i18next";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar } from "@mui/material";
import TechStock from "../components/TechStock";

const Home = () => {
    const { t } = useTranslation()
    return (
        <section>
            <div className="flex flex-1 justify-evenly">
                <div className="text-center mt-4">
                    <div className="leading-10 max-w-md">
                        <h1 className="text-3xl font-mono">{t('home.title')}</h1>
                        <p className="text-xl mt-4">{t('home.subTitle')}</p>
                        <p className="">{t('home.description')}</p>
                    </div>
                    <div className="mt-3 flex gap-3 justify-center">
                        <a href="https://www.facebook.com/angquangky.2024?locale=vi_VN" target="_blank"> <FacebookIcon sx={{ width: '50px', height: '50px' }} /></a>
                        <a href="https://github.com/DangQuangKy" target="_blank"><GitHubIcon sx={{ width: '50px', height: '50px' }} /></a>
                        <a href="https://www.linkedin.com/in/quang-k%E1%BB%B3-%C4%91%E1%BA%B7ng-456158327/" target="_blank"><LinkedInIcon sx={{ width: '50px', height: '50px' }} /></a>
                    </div>
                </div>
                <div>
                    <Avatar
                        sx={{
                            width: '270px',
                            height: '270px',
                            margin: '0',
                            backgroundColor: '#001e3c',
                            border: '3px solid #8796A5',
                            borderRadius: '50%',
                        }}
                        src="/src/assets/avatar.jpg"
                    />
                </div>
            </div>
            <TechStock />
        </section>
    );
}

export default Home;