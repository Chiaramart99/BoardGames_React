import { useNavigate } from 'react-router-dom';
import style from './GamesCard.module.css';

function GamesCard (props) {
    const navigate = useNavigate();

    const { game } = props

    return(

        <div className={style.flipcard}>
            <div className={style.card} onClick={() => navigate(`/GamesDetail/${game.id}`)}>

                <div className={style.flipcardFront}>
                    <img src={game.images.small} alt="gioco" className={style.image}/>
                    <h4 className={style.name}>{game.name}</h4>
                    <p className={style.price}>{game.price} $</p>
                </div>
                <div className={style.flipcardBack}>
                    <p className={style.descrizione}>{game.description_preview}</p>
                </div>

            </div>
        </div>
    )
}

export default GamesCard;