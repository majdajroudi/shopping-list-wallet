import React,{useState} from "react"
import { Card, Button } from 'react-bootstrap'
import ProductsContainer from "../ProductsContainer"
import "./index.css"

function Home()  {
    const [isFormShown, setIsFormShown] = useState(false)

    const handleAdditionClick = (e) => {
        e.preventDefault()
        setIsFormShown(true)
    }

    return(
        <div className="home">
            <Card className="home__headerCard" body>
                <span className="home__headerCard--wallet">
                    Cüzdan:
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

            <ProductsContainer formShownState={isFormShown} formShownStateFunction={setIsFormShown} />
        </div>
    )
}

export default Home