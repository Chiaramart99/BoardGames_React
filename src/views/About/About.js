import React from "react";
import style from "./About.module.css";
import avatar from "../../assets/images/Avatar.png";

function About() {
    return (

        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <h2 className={style.title}>About us</h2>
                    <p>Sono una persona appassionata di giochi da tavolo, attraverso questo sito voglio trasmettere la mia passione
                    per questi giochi. Il mio obiettivo è fornire una piattaforma unica
                    in cui poter cercare tutte le informazioni utili sui giochi da tavolo per poter farsi un idee sul gioco
                        che si vuole comprare<br/>
                    <br/>
                    La nostra piattaforma offre un'ampia varietà di giochi per tutte le età e interessi.
                    Sia che tu stia cercando titoli classici come Monopoly e Taboo o titoli più moderni
                    come Catan e Dixit, abbiamo quello che fa per te. <br/>
                    <br/>
                    Troverai tutte le informazioni necessarie per decidere qual è il gioco che fa al caso tuo, dalla descrizione
                    del gioco al numero di giocatori...
                    </p>
                </div>

                <div className="d-flex justify-content-center">
                    <div className={style.circle}>
                    <img src={avatar} alt="avatar-me" className={style.avatar}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;