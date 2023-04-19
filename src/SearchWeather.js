const SearchWeather = (props) => {
    return (
        <div className="searchWether">
            <form>
                <label htmlFor='searchWether'>Szukaj</label>
                <input type="text" id="searchWether" onChange={(e) => props.filterWeather(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchWeather;