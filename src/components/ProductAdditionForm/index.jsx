import React,{useState} from "react"
import {Form, Button, Col, Row} from "react-bootstrap"
import "./index.css"

function ProductAdditionForm(props) {
    const [inputHandler, setInputHandler] = useState({productsName: "", cost: ""})

    const handleNameChange = (e) => {
        e.preventDefault()
        const stateCopy = {...inputHandler}
        stateCopy.productsName = e.target.value;
        setInputHandler(stateCopy)
    }

    const handleCostChange = (e) => {
        e.preventDefault()
        const stateCopy = {...inputHandler}
        stateCopy.cost = e.target.value;
        setInputHandler(stateCopy)
    }

    const handleAddBtn = (e) => {
        e.preventDefault()
        props.productsListFunction([...props.productsListState, inputHandler])
        setInputHandler({productsName: "", cost: ""})
    }

    return (
        <Form className="productForm">
            <Row className="productForm__row">
                <Col className="productForm__productName">
                    <Form.Label className="productForm__productName--label">Ürün Adı</Form.Label>
                    <Form.Control value={inputHandler.productsName} onChange={(e) => handleNameChange(e)} className="productForm__productName--input" type="input"  />
                </Col>
                <Col>
                    <Form.Label className="productForm__productCost--label">Tutar</Form.Label>
                    <Form.Control value={inputHandler.cost} onChange={(e) => handleCostChange(e)} className="productForm__productCost--input" type="number" />
                </Col>
                <Col>
                    <Button onClick={(e) => handleAddBtn(e)} className="productForm--btn">
                        Ekle
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ProductAdditionForm