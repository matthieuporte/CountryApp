
import '../style.css';

const CountryInfo = (props) => {
    if (props.data === null)
        return null
    return (
        <>
            <div>
                <div className="c25">
                    <img className="coatofarms" src={props.data.coatOfArms.png}/>
                </div>
                <div className="c50">
                    <h2 className="center">{props.data.name.common}</h2>
                </div>
                <div className="c25">
                    <img className="flag" src={props.data.flags.png}/>
                </div>
            </div>
            <div>
                <div className="c25"></div>
                <table className="c50">
                    <tbody>
                    <tr>
                        <td>Official Name</td>
                        <td>{props.data.name.official}</td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td>{props.data.capital}</td>
                    </tr>
                    <tr>
                        <td>Region</td>
                        <td>{props.data.region}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{props.data.population}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{props.data.area}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default CountryInfo