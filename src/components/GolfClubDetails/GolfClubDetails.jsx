import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
function GolfClubDetails({details}) {
    console.log('Club details', details)
    const history = useHistory();
    const dispatch = useDispatch();

    const addToCart = () => {
        let type = 'ADD_TO_CART' && 'ADD_ITEM';
        dispatch({
            type: type,
            payload: details
        })
        history.push('/shoppingcart')
    }

    return(
        <div>
        <h1>{details.brand}</h1>
        <img src={details.image} />
        <p>{details.description}</p>
        <p>Price: ${details.price} <button onClick={addToCart}>Add To Cart</button></p>
        </div>
    )
}
export default GolfClubDetails;