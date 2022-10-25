export default function StarshipInfo({starship}) {
    return (
        <div className="ship-info">
            <span className="info-label">Crew:</span> {starship.crew}<br/>
            <span className="info-label">Manufacturer:</span> {starship.manufacturer}<br/>
            <span className="info-label">Starship Class:</span> {starship.starship_class}
        </div>
    )
}