import React from 'react';
import style from "./bestHotel.module.css";
import moment from 'moment';

function BestHotel(props) {
    const [time, setTime] = React.useState();
    const endTime = moment().add(2, 'minutes').add(34, 'seconds');
    let interval;

    React.useEffect(() => {
        interval = setInterval(() => {
            const timeLeft = moment().to(endTime);
            setTime(timeLeft)
        }, 1000)    

        return () => {clearInterval(interval)}
    }, [])
    

    return (
        <>
            <div className={style.container}>
                <div className={style.innerContainer}>
                    <p>
                        <b>Best offer: </b>
                        {props.bestHotel.name}, Rating: {props.bestHotel.rating}
                    </p>
                    <a href="#" className="btn btn-light">
                        Show
                    </a>
                </div>
                <div className={style.innerContainer}>
                    <p><b>Expires {time}</b></p>
                </div>
            </div>
            <hr style={{ width: "100%" }} />
        </>
    );
}

export default BestHotel;
