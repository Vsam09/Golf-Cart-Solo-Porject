import {useSelector} from 'react-redux';
import GolfClubDetails from '../GolfClubDetails/GolfClubDetails';
function GolfDetails(clubs) {

    const details = useSelector(store => store.golfDetails);

    return(
        <div>
        {details.map((golfClubDetails) => (
            <div key={golfClubDetails.id}>
                <GolfClubDetails golfClubDetails = {golfClubDetails} />
            </div>
        ))}
        </div>
    )
}
export default GolfDetails;