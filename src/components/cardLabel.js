import { Row, Col } from "react-bootstrap";
import "./style.css";

function CardLabel(){
    // const storedImage = localStorage.getItem('image');
    // const storedLabel = JSON.parse(localStorage.getItem('label'));

    // return(
        
    //     <Row className='square border border-dark'>
    //         <Col className="d-flex align-items-center justify-content-center">
    //             <div className="imageShow">
    //                 <img src={storedImage} alt="Logo" style={{height: 100, width: 100}}/>
    //             </div>
    //         </Col>
    //         <Col className="d-flex align-items-center justify-content-center" >
    //             <div>{storedLabel}</div>
    //         </Col>
    //     </Row>
    // )

    const imageLabelPairs = JSON.parse(localStorage.getItem('imageLabelPairs')) || [];

    window.onbeforeunload = function() {
        localStorage.clear();
     }
     
    return(
        <div>
            {imageLabelPairs.map((pair, index) => (
                <Row key={index} className='square border border-dark'>
                    <Col className="d-flex align-items-center justify-content-center">
                        <div className="imageShow">
                            <img src={pair.image} alt={`Label ${index}`} style={{height: 100, width: 100}}/>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" >
                        <div>{pair.label}</div>
                    </Col>
                </Row>
            ))}
        </div>
    )
}
export default CardLabel;