import React from "react"
import { Card, Button, Col } from 'react-bootstrap'
import "./index.css"

function ProductsContainer() {

    return(
        <Card style={{backgroundColor: "#D8D8D8"}} border="dark" className="home__productsCard">
            <Card.Header className="home__productsCard__header">
                <span className="home__productsCard__header--productsName">
                    Urun Adi
                </span>
                <span className="home__productsCard__header--cost">
                    Tutar
                </span>
            </Card.Header>
            <Card.Body className="home__productsCard__body">
                
            </Card.Body>
            <Card.Footer className="home__productsCard__footer">
                toplam tutar: 
            </Card.Footer>
        </Card>
    )
}

export default ProductsContainer