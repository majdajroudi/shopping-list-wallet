import React,{useState} from "react"
import { Card, Button, Col } from 'react-bootstrap'
import ProductAdditionForm from "../ProductAdditionForm"
import "./index.css"

function ProductsContainer(props) {
    const [productsList, setProductsList] = useState([])

    return(
        <Card style={{backgroundColor: "#D8D8D8"}} border="dark" className="home__productsCard">
            <Card.Header className="home__productsCard__header">
                <span className="home__productsCard__header--productsName">
                    Ürün Adı
                </span>
                <span className="home__productsCard__header--cost">
                    Tutar
                </span>
            </Card.Header>
            <Card.Body className="home__productsCard__body">
               {props.formShownState && <ProductAdditionForm formShownStateFunction={props.formShownStateFunction}/>}
            </Card.Body>
            <Card.Footer className="home__productsCard__footer">
                toplam tutar: 
            </Card.Footer>
        </Card>
    )
}

export default ProductsContainer