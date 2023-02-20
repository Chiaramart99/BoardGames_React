import React, {useEffect, useState} from "react";
import GamesCard from "../GamesCard/GamesCard";

function GamesGrid(props) {

    const { giochi } = props

    // cards attualmente visibili
    const [cards, setCards] = useState(null);

    useEffect(() => {
        generaCards(giochi)
    }, [giochi])

    // Genera le cards
    const generaCards = (data) => {
        const cards = data.games.map((game) => {
            return (
                <GamesCard game={game} key={game.id} />
            )
        });

        setCards(cards)
    }

    return(
        <>
            <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                        {cards}
                </div>
            </div>
            </div>
        </>
    )
}

export default GamesGrid;