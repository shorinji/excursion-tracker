import React, { useState } from 'react'


export default (props) => {
    const [excursions] = useState(props.excursions);

    return (<div>
        <h1>Utflykter</h1>

        <table className="table">
        <tbody>
        <tr>
            <th>Datum</th>
            <th>Titel</th>
            <th>Kilometer</th>
        </tr>
        {excursions.map((excursion) => <tr key={excursion.id}>
                <td>{excursion.date}</td>
                <td>{excursion.title}</td>
                <td>{excursion.distance}</td>
        </tr>)}
        </tbody>
        </table>

    </div>);
}
