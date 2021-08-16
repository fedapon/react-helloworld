import axios from "axios"
import querystring from "querystring"
import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Addresses() {

    let [addresses, setAddresses] = useState([])
    
    useEffect(function(){
        axios.get('https://fakerapi.it/api/v1/addresses', { params: {_quantity: 50} })
            .then(res => {
                //console.log(res.data.data)
                setAddresses(res.data.data)
            })

    },[])

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Addresses</h1>
                    <hr/>
                    {
                        addresses.map((element, index)=>{
                            return (
                                <div>
                                    <Link to={`/addresses/${index}`} className="text-primary" key={index}>{element.street}</Link>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Addresses