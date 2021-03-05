import { DateTime } from 'luxon';

function Flight(props) {
    return (

        <div className="flight">
            <ul>
                <li>Origin: {props.flight.cityFrom}</li>
                <li>Destination: {props.flight.cityTo}</li>
                <li>Local time of departure: {DateTime.fromMillis(props.flight.dTime * 1000).toFormat('hh:mm')}</li>
                <li>Local time of arrival: {DateTime.fromMillis(props.flight.aTime * 1000).toFormat('hh:mm')}</li>
                <li>Price: €{props.flight.price}</li>
                {props.flight.transfers > 0 ? <li>Transfers: {props.flight.transfers}</li> : <li>No Transfers</li>}
                
            </ul>
        </div>
    )
}


export default Flight;