import { useEffect, useRef, useState } from "react";
import SearchForm from "./SearchForm";
import Coin from "./Coin";

const CryptoApp = () => {

    const [title, setTitle] = useState('')
    const [coinName, setCoinName] = useState(null)
    const [price, setPrice] = useState(null)
    const [notFound, setNotFound] = useState(false)

    const inputRef = useRef(null)

    const fetchPrice = async () => {
        if (!title) return;

        const url = `https://api.binance.com/api/v3/ticker/price?symbol=${title}`

        try {
            const response = await fetch(url)
            const data = await response.json()

            if (data.code) {
                setNotFound(true)
                setPrice(null)
                setCoinName(null)
            } else {
                const filteredData = parseFloat(data.price).toFixed(2)
                setPrice(filteredData)
                setCoinName(title)
                setNotFound(false)
            }
        } catch (error) {
            setNotFound(true)
            setPrice(null)
            setCoinName(null)
        }

        setTitle('')
        inputRef.current.focus()
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <SearchForm
                value={title} 
                onChange={(e) => setTitle(e.target.value.toUpperCase())} 
                onClick={fetchPrice}
                ref={inputRef}
            />
            {price && coinName ? (
                <Coin name={coinName} price={price} />
            ) : notFound ? (
                <div className="not-found">❌ Coin not found. Try BTCUSDT or ETHUSDT</div>
            ) : null}
        </div>
    )
}

export default CryptoApp