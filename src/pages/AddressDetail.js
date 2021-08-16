import axios from "axios"
import {Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


function AddressDetail () {

    let [address, setAddress] = useState([])
    let {id} = useParams()

    useEffect(function() {
        axios.get('https://fakerapi.it/api/v1/addresses')
            .then( res => {
                setAddress(res.data.data[id])
            })

    },[])

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Address Detail</h1>
                    <hr/>
                    <div>
                        <label>Street: {address.street} </label>
                    </div>
                    <div>
                        <label>Street Name: {address.streetName} </label>
                    </div>
                    <div>
                        <label>Building Number: {address.buildingNumber} </label>
                    </div>
                    <div>
                        <label>ZIP Code: {address.zipcode} </label>
                    </div>
                    <div>
                        <hr/>
                        <Link to='/addresses' className="text-primary">Volver</Link>
                    </div>
                
                </Col>
            </Row>
        </Container>)
}

export default AddressDetail
