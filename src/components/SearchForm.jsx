const SearchForm = ({onClick, value, onChange, ref}) => {
    return (
        <div className="search-container">
            <h1 className="search-title">Crypto Price Tracker</h1>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Enter symbol (e.g. BTCUSDT, ETHUSDT)"
                    value={value}
                    onChange={onChange}
                    ref={ref}
                    onKeyPress={(e) => e.key === 'Enter' && onClick()}
                />
                <button onClick={onClick}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchForm