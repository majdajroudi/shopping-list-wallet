import React,{useState, useEffect} from "react"
import { Card, Button, Row } from 'react-bootstrap'
import ProductsContainer from "../ProductsContainer"
import {users} from "../../api/Mock-Data.js"
import "./index.css"

const NET_WORTH = users.user1.netWorth

function Home()  {
    // isFormshown state shows the add product form when "URUN EKLE" button is clicked
    const [isFormShown, setIsFormShown] = useState(false)
    // isBuyable state enables/disables the buy button and shows/hides the warning
    const [isBuyable, setIsBuyable]     = useState(true)

    // handles URUN EKLE button
    const handleAdditionClick = (e) => {
        e.preventDefault()
        setIsFormShown(true)
    }

    return(
        <div className="home">
            <Card className="home__headerCard" body>
                <span className="home__headerCard--wallet">
                    Cüzdan: {NET_WORTH} TL
                </span>
                <Button className="home__headerCard--btn">
                    Para Ekle
                </Button>
            </Card>

            <div className="home__productAddition">
                <span className="home__productAddition--products">
                    Ürünler
                </span>
                <Button onClick={(e) => handleAdditionClick(e)} className="home__productAddition--btn">
                    Ürün Ekle
                </Button>
            </div>

            <ProductsContainer 
                formShownState={isFormShown} 
                netWorth={NET_WORTH} 
                formShownStateFunction={setIsFormShown} 
                isBuyableFunction={setIsBuyable}/>
            {!isBuyable &&  
            <Card className="home__alert" body>
                İşlem için yeterli bakiyeniz bulunmamaktadır.
            </Card> }

            <Row className="home__buyBtn">
                <Button className="home__buyBtn--btn" disabled={!isBuyable} style={{backgroundColor: isBuyable? "#66FC5B" : "#CDCDCD"}}>
                    Satın Al
                </Button>
            </Row>
        </div>
    )
}

export default Home