function LastHotel(props) {
    return (
        <div className="card bf-light container" style={{marginTop: "20px", padding: "0 0"}}>
            <div className="card-header">
                Last seen offer. Still interested?
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-title">City: {props.city}</p>
                </div>
                <button className="btn btn-sm btn-primary">
                    Yes!
                </button>
                <button onClick={props.onRemove} className="btn btn-sm btn-danger" style={{marginLeft: "7px"}}>
                    No
                </button>
            </div>
        </div>
    )
}

export default LastHotel;
