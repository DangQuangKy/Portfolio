import { Button } from "@mui/material";

const About = () => {
    return (
        <div>
            <div className="flex p-14">
            <div className="flex-1">
                <div className="text-center">
                    <h1 className="text-3xl font-mono">About Me</h1>
                    <div className="flex justify-center items-center mt-8"><img src="/src/assets/loader_01.png" style={{width: 240, height: 220}} /></div>
                </div>
            </div>
            <div className="flex-1 ">
                <div className="max-w-md">
                    <p className="text-lg font-bold">Hi, I’m Dang Quang Ky. A passionate Front-end Web Developer based in Ha Noi, Viet Nam.</p>
                    <p className="mt-2">I am a Front-end Web Developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and ReactJs, and am always eager to learn new technologies and skills to improve my craft. My goal is to create websites that not only look great, but are user-friendly and accessible to everyone. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am looking for new career opportunities.</p>
                </div>
            </div>
        </div>
        <div className="text-center mt-10">
            <a href="../assets/CV.pdf" download="CV_Dang_Quang_Ky.pdf" target="_blank"><Button variant="outlined">Download CV</Button></a>
        </div>
        </div>

    );
}

export default About;