import { useNavigate } from "react-router-dom";

const LogoTitle = () => {
    const navigate = useNavigate();

    return ( 
        <div className="text-5xl cursor-pointer" onClick={() => navigate("/")}>
            Ky D.Q {'</>'}
        </div>
     );
}
 
export default LogoTitle;