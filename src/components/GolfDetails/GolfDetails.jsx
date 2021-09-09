import {useSelector} from 'react-redux';
import GolfClubDetails from '../GolfClubDetails/GolfClubDetails';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
function GolfDetails() {

    const details = useSelector(store => store.golfDetails);
    console.log('store details', details);

    return(
        <div>
            {details.map(details => (
            <div><GolfClubDetails key={details.id} details = {details} />
            <ShoppingCart key={details.id} details = {details}/>
            </div>
            ))}    
        </div>
    )
}
export default GolfDetails;