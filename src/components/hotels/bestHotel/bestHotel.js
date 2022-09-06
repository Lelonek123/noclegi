import style from "./bestHotel.module.css";

function BestHotel(props) {
    if (props.bestHotel == null) {
        return <div></div>
    }
    return (
        <>
        <div className={style.container}>
            <p>
                <b>Best ofer: </b>
                {props.bestHotel.name}, Rating: {props.bestHotel.rating}
            </p>
            <a href="#" className="btn btn-light">
                Show
            </a>
        </div>
        <hr style={{width: '100%'}}/>
        </>
    );
}

export default BestHotel;
