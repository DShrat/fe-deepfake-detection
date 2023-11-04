import { IconContext } from 'react-icons';
import {IoArrowBackCircleSharp} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

function About(){
    const navigate = useNavigate();
    return(
        <Container>
            <Row>
                <Col xs lg="2">
                    <div style={{marginTop: 20}}>
                        <IconContext.Provider value={{ color: 'black', size: '50px' }}>
                            <div>
                            <button onClick={() => navigate(-1)}><IoArrowBackCircleSharp/></button>
                            </div>
                        </IconContext.Provider>
                    </div>
                </Col>
                <Col style={{marginTop: 100}}>
                    <div className="isi awal">
                        <h1>Tentang website</h1>
                        <p>Website ini dibuat untuk kepentingan tugas akhir universitas dan tidak dianjurkan untuk penggunaan umum dikarenakan kekurangan resource</p>
                    </div>
                    <div className="isi tengah">
                        <h1>Catatan Penggunaan</h1>
                        <p>1. Website ini dibuat untuk mendeteksi sebuah gambar itu deepfake atau asli</p>
                        <p>2. Hanya dapat mendeteksi manusia</p>
                        <p>3. Hanya dapat menerima input JPG</p>
                        <p>4. Tutup dan buka kembali tab untuk menghapus history</p>
                        <p>5. History akan terhapus otomatis jika menutup tab</p>
                    </div>
                    <div className="isi terima kasih">
                        <h1>Source</h1>
                        <p>Dalam pembuatan website dan sistem ini sangat dibantu oleh</p>
                        <p>1. React-Icon</p>
                        <p>2. Kaggle</p>
                        <p>3. Medium</p>
                        <p>4. CodingMSTR</p>
                        <p>Terima kasih saya ucapkan kepada semua yang telah menjadi bahan acuan saya</p>
                        <p>Thank you to all those who have become my reference material</p>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}
export default About;