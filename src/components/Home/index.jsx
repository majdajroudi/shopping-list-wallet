import React,{useState} from "react"
import { Card, Button } from 'react-bootstrap'
import ProductsContainer from "../ProductsContainer"
import "./index.css"

function Home()  {
    return(
        <div className="home">
            <Card className="home__headerCard" body>
                <span className="home__headerCard--wallet">Cüzdan</span>
                <Button className="home__headerCard--btn">
                    Para Ekle
                </Button>
            </Card>

            <div className="home__productAddition">
                <span className="home__productAddition--products">
                    Ürünler
                </span>
                <Button className="home__productAddition--btn">
                    Ürün Ekle
                </Button>
            </div>

            <ProductsContainer />
        </div>
    )
}

export default Home