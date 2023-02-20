import React from "react";
import { useState, useEffect } from "react";
import GamesTable from "../../components/GamesTable/GamesTable";
import style from "./Home.module.css";


function Home() {

    // nome del gioco da cercare
    const [name, setName] = useState("")

    const [yearAttivo, setYearAttivo] = useState(false)
    const [year, setYear] = useState(0)


    const LIMITE = 30

    // oggetto giochi, contiene la lista di tutti i giochi
    const [giochi, setGiochi] = useState(null)


    useEffect(() => {
        caricaGiochi()
    }, [name, yearAttivo, year])


    // fetcha i dati dall'api e li salva nello stato giochi
    const caricaGiochi = () => {
        var url = `https://api.boardgameatlas.com/api/search?client_id=hDNXR3didH&limit=${LIMITE}&name=${name}&fuzzy_match=true`

        if (yearAttivo) {
            url += `&year_published=${year}`
        }

        // richiesta api
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGiochi(data)
            })
    }


    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <h2 className={style.title}>Board Games</h2>
                    <p>Puoi cercare i tuoi giochi preferiti in un attimo, ti basta digitare il nome del gioco e ti apparirà subito sotto!  </p>
                    <input className={style.button} type="text" onChange={(event) => setName(event.target.value)}/>


                    {/* Filtro ANNO*/}
                    <div>
                        <p>Qui sotto potrete anche decidere di filtrare i giochi per anno di pubblicazione. <br/>
                            Vi basterà digitare l'anno, dopo aver scritto il gioco e cliccare sul bottone attiva.</p>
                        <h5>Filtro per anno: {yearAttivo ? "attivo" : "disattivo"}</h5>
                        <button className={style.button} onClick={() => setYearAttivo(!yearAttivo)}> {yearAttivo ? "Disattiva" : "Attiva"} </button>
                        <input type="number" onChange={(event) => setYear(event.target.value)}/>
                    </div>


                    {name.length === 0 ? "" :

                        giochi ? <GamesTable giochi={giochi}/> :

                            <h4>loading...</h4>
                    }

                </div>

            </div>

        </div>
    )
}

export default Home;