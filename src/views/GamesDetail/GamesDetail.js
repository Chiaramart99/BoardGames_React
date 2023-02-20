import React from "react";

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './GamesDetail.module.css';
import people from '../../assets/images/people.png';
import clock from '../../assets/images/clock.png';
import age from '../../assets/images/age.png';

function GamesDetail() {

    const { id } = useParams()

    const [gioco, setGioco] = useState()

    // richiesta all'id del singolo gioco
    useEffect(() => {
        richiestaApi()
    }, [])


    // richiesta api
    const richiestaApi = () => {
        fetch(`https://api.boardgameatlas.com/api/search?client_id=hDNXR3didH&ids=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setGioco(data.games[0])
            })
    }

    if (gioco){
    return (
        <>
            <div className="container-fluid">
                <div className="container">

                    <div className="row justify-content-center">
                        <h1 className={`${style.centro} ${style.h1}`}>{gioco.name}</h1>
                        <img src={gioco.images.medium} alt="gioco" className={style.image}/>
                        <h3 className={style.centro}>{gioco.price} $</h3>

                        <h2 className={style.description}>Description</h2>
                        <p dangerouslySetInnerHTML={{__html: gioco.description}}></p>
                    </div>

                    <div className="row">
                                <div className={style.table}>

                                    <div className={style.card}>
                                        <img src={people} alt="icon" className={style.icon}/>
                                        <h3 className={style.space}>Players</h3>
                                        <p className={`${style.space} ${style.p}`}>{gioco.players}</p>
                                    </div>

                                    <div className={style.card}>
                                        <img src={clock} alt="icon" className={style.icon2}/>
                                        <h3 className={style.space}>Playtime</h3>
                                        <p className={`${style.space} ${style.p}`}>{gioco.playtime}</p>
                                    </div>

                                    <div className={style.card}>
                                        <img src={age} alt="icon" className={style.icon2}/>
                                        <h3 className={style.space}>Min Age</h3>
                                        <p className={`${style.space} ${style.p}`}>{gioco.min_age}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
        </>
    )

    } else{
    return <h1>{"Loading..."}</h1>
    }

}

export default GamesDetail;
