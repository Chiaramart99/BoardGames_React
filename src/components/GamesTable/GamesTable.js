import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import style from './GamesTable.module.css';

function GamesTable(props) {
    const navigate = useNavigate();

    const { giochi } = props


    // righe della tabella attualmente visibili
    const [righe, setRighe] = useState(null);


    useEffect(() => {
        generaRighe(giochi)
    }, [giochi])

    // funzione che genera le righe
    const generaRighe = (data) => {
        const righe = data.games.map((game) => {
            return (
                <tr key={game.name} onClick={() => navigate(`/GamesDetail/${game.id}`)} className={style.riga}>
                    <td>
                        <img className={style.image} src={game.images.small} alt=""/>
                    </td>
                    <td className={style.nome}>{game.name}</td>
                    <td className={style.price}>{game.price} $</td>
                </tr>
            )
        });

        setRighe(righe)
    }

    return(
        <>
            <table className="table">
                <thead className={style.left}>
                <tr className={style.tr}>
                    <th className={style.th}>Image</th>
                    <th className={style.th}>Name</th>
                    <th className={style.th}>Price</th>
                </tr>
                </thead>
                <tbody>

                {righe ? righe : <tr><td className={style.bold}>Loading...</td></tr>}

                </tbody>
            </table>
        </>
    )
}

export default GamesTable;