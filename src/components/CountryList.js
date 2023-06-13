const CountryList = (props) => {
    if (props.list === null || props.list.length === 0)
        return null
    return (
        <>
            {props.list.map(e => <p className="pointer" onClick={() => props.showData(e.name)}> - {e.flag} | {e.name}</p>)}
        </>
    )
}

export default CountryList