import {useSelector} from 'react-redux';
import GolfClubDetails from '../GolfClubDetails/GolfClubDetails';
function GolfDetails() {

    const details = useSelector(store => store.golfDetails);
    console.log('store details', details);

    return(
        <div>
            {details.map((details, i) => (
                <GolfClubDetails key={i} details = {details} />
            ))}    
        </div>
    )
}
export default GolfDetails;