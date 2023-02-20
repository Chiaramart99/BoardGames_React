import React, {useState, useEffect} from "react";
import GamesGrid from "../../components/GamesGrid/GamesGrid";
import GamesTable from "../../components/GamesTable/GamesTable";
import style from "./Games.module.css";
import clsx from 'clsx';


function Games() {
    const [displayGrid, setDisplayGrid] = useState("true");

    // ----------- CARICAMENTO GIOCHI

    const GIOCHI_PER_PAGINA = 30

    // oggetto giochi, contiene la lista di tutti i giochi
    const [giochi, setGiochi] = useState(null)

    const [numUltimoGiocoCaricato, setNumUltimoGiocoCaricato] = useState(0);

    useEffect(() => {
        caricaGiochi(true)
    },[])

    // fetcha i dati dall'api e li salva nello stato giochi
    // aggiorna anche il numero dei giochi caricati
    const caricaGiochi = (isAvanti) => {
        // controllo non si va indietro da pagina 1
        if (!isAvanti && (numUltimoGiocoCaricato / GIOCHI_PER_PAGINA === 1)) {
            alert("non si va indietro a 0")
            return
        }

        // righe da skippare alla richiesta all'api
        var skipRighe;
        if (isAvanti) {
            skipRighe = numUltimoGiocoCaricato
        } else {
            skipRighe = numUltimoGiocoCaricato - (GIOCHI_PER_PAGINA*2)
        }

        // richiesta api
        fetch(`https://api.boardgameatlas.com/api/search?client_id=hDNXR3didH&limit=${GIOCHI_PER_PAGINA}&skip=${skipRighe}`)
            .then((res) => res.json())
            .then((data) => {
                setGiochi(data)
                // aggiorna numero dei giochi caricati
                setNumUltimoGiocoCaricato(skipRighe+GIOCHI_PER_PAGINA)
            })
    }

    // ----------- CARICAMENTO GIOCHI

    useEffect(() => {
        toTop()
    }, [])

    const toTop = () => {
        window.scrollTo(0, 0)
    }


    return (

        <div className="container">

            <div className="row justify-content-center">
                <div className="col">

                    <div className={style.switch}>

                       <div className={clsx(style.button, {[style.active]: displayGrid})}
                           onClick={() => setDisplayGrid(true)}>
                           Grid
                       </div>

                        <div className={clsx(style.button, {[style.active]: !displayGrid})}
                            onClick={() => setDisplayGrid(false)}>
                            Tabel
                        </div>

                    </div>

                </div>
            </div>



            <div className="row justify-content-center">
                <div className="col">

                    {!giochi ? <h1>Loading...</h1> :

                        displayGrid ?
                            <GamesGrid giochi={giochi}/>
                            :
                            <GamesTable giochi={giochi}/>
                    }
                </div>
            </div>


            <div className={style.numero}>
                {numUltimoGiocoCaricato / GIOCHI_PER_PAGINA}
            </div>


            <div className={style.centro}>
                <button className={style.button} onClick={() => {caricaGiochi(false); toTop();}} disabled={numUltimoGiocoCaricato / GIOCHI_PER_PAGINA === 1}>prev</button>

                <button className={style.button} onClick={() => {caricaGiochi(true); toTop();}}>next</button>
            </div>

        </div>

    )

}

export default Games;