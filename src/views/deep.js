import ImageUpload from "../components/FileUpload";
import { IconContext } from 'react-icons';
import {IoArrowBackCircleSharp} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


function Deep(){
    const navigate = useNavigate();
    return(
        <div className="container">
            <div style={{marginTop: 20}}>
                <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                    <div>
                    <button onClick={() => navigate(-1)}><IoArrowBackCircleSharp/></button>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="content">
                <ImageUpload />
            </div>
        </div>
    )
}
export default Deep;