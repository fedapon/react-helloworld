import axios from "axios"
import querystring, { stringify } from "querystring"
import {Container, Row, Col, Table} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CryptoYa() {
    
    let [cotizacionDolar, setCotizacionDolar] = useState({})
    let [cotizacionDaiBuenbit, setCotizacionDaiBuenbit] = useState({})
    let [cotizacionUsdBuenbit, setCotizacionUsdBuenbit] = useState({})
    
    useEffect(function(){
        const p1 = axios.get('https://criptoya.com/api/dolar')
            .then(res => {
                setCotizacionDolar(res.data)
                console.log("get dolar ended")
            })
        const p2 = axios.get('https://criptoya.com/api/buenbit/dai/ars')
            .then(res => {
                setCotizacionDaiBuenbit(res.data)
                console.log("get dai ended")
            })
        const p3 = axios.get('https://criptoya.com/api/buenbit/dai/usd')
            .then(res => {
                setCotizacionUsdBuenbit(res.data)
                console.log("get dolar-dai ended")
            })
        Promise.all([p1,p2,p3]).then( ()=> {
            console.log("All promises ended")
        })
    },[])

    function cotizacionUsdImplicito() {
        return (cotizacionDaiBuenbit.totalAsk/cotizacionUsdBuenbit.totalBid)
    }
        
    return (
        <Container>
        <Row>
            <Col>
                <h1>CryptoYa</h1>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-md-center">
            <h3>Cotización del Dolar (Buenbit)</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Dolar</th>
                            <th className="text-center">Cotización</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Oficial</td>
                            <td className="text-center">$ {Number(cotizacionDolar.oficial).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>Solidario</td>
                            <td className="text-center">$ {Number(cotizacionDolar.solidario).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>MEP</td>
                            <td className="text-center">$ {Number(cotizacionDolar.mep).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>CCL</td>
                            <td className="text-center">$ {Number(cotizacionDolar.ccl).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>CCB</td>
                            <td className="text-center">$ {Number(cotizacionDolar.ccb).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>Blue</td>
                            <td className="text-center">$ {Number(cotizacionDolar.blue).toFixed(3)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
            <Col className="justify-content-md-center">
                <h3>Cotización $AR=>DAI (Buenbit)</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DAI</th>
                            <th className="text-center">Cotización</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Compra</td>
                            <td className="text-center">$ {Number(cotizacionDaiBuenbit.totalAsk).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Venta</td>
                            <td className="text-center">$ {Number(cotizacionDaiBuenbit.totalBid).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Cotización DAI=>USD (Buenbit)</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Dolar</th>
                            <th className="text-center">Cotización</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Compra</td>
                            <td className="text-center">$ {Number(cotizacionUsdBuenbit.totalAsk).toFixed(3)}</td>
                        </tr>
                        <tr>
                            <td>Venta</td>
                            <td className="text-center">$ {Number(cotizacionUsdBuenbit.totalBid).toFixed(3)}</td>
                        </tr>
                    </tbody>
                </Table>
                <h5>Cotización USD implicita ($AR=>DAI=>USD) Buenbit</h5>
                <p className="text-center">$ {Number(cotizacionUsdImplicito()).toFixed(3)}</p>
            </Col>
        </Row>
        <Row>
            <Col>
            <div>
                    <hr/>
                    <Link to='/home' className="text-primary">Home</Link>
                </div>
            </Col>
        </Row>
        </Container>
    )
}

export default CryptoYa