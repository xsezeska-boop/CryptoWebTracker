const Coin = ({price, name}) => {
    return (
    <div className="CoinsList">
        <h2> {name} </h2>
        <h3> {price} </h3>
    </div>
    )
}

export default Coin