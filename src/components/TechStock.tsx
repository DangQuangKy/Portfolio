import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa6";

const TechStock = () => {
    const skills = [
        { name: 'HTML', icon: <FaHtml5  />},
        { name: 'CSS', icon: <FaCss3Alt />},
        { name: 'JavaScript', icon: <FaJs />},
        { name: 'ReactJS', icon: <FaReact />},
        { name: 'GitHub', icon: <FaGithub />},
    ]
    return ( 
        <div className="mt-14 text-center">
            <h1 className="text-lg">Tech Stocks</h1>
            <div className="flex justify-center gap-5 mt-5">
            {skills.map((skill, index) =>(
                <div key={index} className="text-4xl">
                    {skill.icon}
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default TechStock;