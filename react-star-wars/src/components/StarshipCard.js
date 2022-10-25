import { useState } from 'react';

import StarshipInfo from "./StarshipInfo";

export default function StarshipCard({ starship }) {

    let [toggle, setToggle] = useState(false);

    return (
        <div className="cards">
            <article className="card">
                <div className="ship-name" onClick={() => setToggle(!toggle)}>
                  {starship.name}
                </div>
                {toggle && <StarshipInfo starship={starship}/>}
                
            </article>
        </div>
    )
}