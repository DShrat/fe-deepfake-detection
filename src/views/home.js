import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import { IconContext } from 'react-icons';
import {SiAboutdotme} from "react-icons/si";
import {RiFileSearchFill} from "react-icons/ri";
import {AiOutlineHistory} from "react-icons/ai";
import { Link } from "react-router-dom";

function Home(){
    
    return(
        <Container className='utama'>
            <Row className='kolom1'>
                <Col>
                    <IconContext.Provider value={{ color: 'black', size: '250px' }}>
                        <div>
                            <Link to="/deep"><RiFileSearchFill/></Link>
                        </div>
                    </IconContext.Provider>
                </Col>
            </Row>
            <Row className='kolom1'>
                <Col>
                    <IconContext.Provider value={{ color: 'black', size: '250px' }}>
                        <div>
                            <Link to="/history"><AiOutlineHistory /></Link>
                        </div>
                    </IconContext.Provider>
                </Col>
                <Col>
                    <IconContext.Provider value={{ color: 'black', size: '250px' }}>
                        <div>
                            <Link to="/about"><SiAboutdotme /></Link>
                        </div>
                    </IconContext.Provider>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;