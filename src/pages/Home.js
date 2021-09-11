import { Container, Row, Col } from "react-bootstrap"
import {Link} from 'react-router-dom'

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Home</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/addresses" className="text-primary">Addresses</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/cryptoya" className="text-primary">CryptoYa</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home