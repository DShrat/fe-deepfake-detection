import { IconContext } from 'react-icons';
import {IoArrowBackCircleSharp} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Labelcard from "../components/cardLabel";

// import skeleton from "../components/aaqdkpivxv.jpg"

// const img = skeleton;
const label = "test";


function History(){
    const navigate = useNavigate();
    return(
        <Container>
            <Col xs lg="2">
                    <div style={{marginTop: 20}}>
                        <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                            <div>
                            <button onClick={() => navigate(-1)}><IoArrowBackCircleSharp/></button>
                            </div>
                        </IconContext.Provider>
                    </div>
            </Col>
            <Col>
                <Row style={{marginTop: 50}}>
                    <Col>
                        <Row>
                            <Col className='square border border-dark d-flex align-items-center justify-content-center'>
                            Gambar
                            </Col >
                            <Col className='square border border-dark d-flex align-items-center justify-content-center'>
                            Label
                            </Col>
                        </Row>
                            <Labelcard/>
                    </Col>
                </Row>
            </Col>
            
        </Container>
        
    )
}
export default History;