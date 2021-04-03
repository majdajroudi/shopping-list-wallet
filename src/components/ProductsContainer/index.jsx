import React,{useState, useEffect} from "react"
import { Card, Row } from 'react-bootstrap'
import ProductAdditionForm from "../ProductAdditionForm"
import "./index.css"

function ProductsContainer(props) {
    const [productsList, setProductsList] = useState([])
    const [totalCost, setTotalCost] = useState(0)

    const calculateTotal = (products) => {
        const newTotalCost = products.reduce((acc, product) => {
            // cost is converted to KURUS so avoid errors coming from Javascript precision numbers
            const costInKurus = product.cost * 100;
            return acc + costInKurus;
        }, 0)

        // total is converted back to LIRAS, to be compared to the new worth of the user
        return newTotalCost/100
    }

    useEffect(() => {
        const newTotal = calculateTotal(productsList);
        setTotalCost(newTotal)

        // if total cost of products is higher than the net worth then set buyable to false
        props.isBuyableFunction(newTotal <= props.netWorth? true : false)
    }, [productsList])

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
                
                <Row className="home__productsCard__body--productsList">
                    {productsList.map((product, ind) => {
                        return( <Row key={`product-${ind}`}>
                            <span className="home__productsCard__body--productsName">
                                {product.productsName}
                            </span>
                            <span className="home__productsCard__body--cost">
                                {product.cost} TL
                            </span>
                        </Row>
                        )
                    })} 
                </Row>
                
               {props.formShownState && <ProductAdditionForm 
                                        formShownFunction={props.formShownStateFunction} 
                                        productsListFunction={setProductsList}
                                        productsListState={productsList}/>}
                
            </Card.Body>
            <Card.Footer className="home__productsCard__footer">
                {/* Precision is set to 4 for UI reasons. */}
                Toplam Tutar: {totalCost.toPrecision(4)} TL
            </Card.Footer>
        </Card>
    )
}

export default ProductsContainer