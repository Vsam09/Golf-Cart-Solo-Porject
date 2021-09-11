import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import { Button } from "@material-ui/core";
function ShoppingCart() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [user, golfDetails, total] = useSelector(state => {
        return [state.user, state.shoppingCart, state.total]
    }); 
    
    return (
        <>
        <p>{user.username}</p>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {golfDetails.map(golf => 
                    <tr>
                        <td><img width="50px" src={golfDetails.image} /> {golf.brand}</td>
                        <td>{golf.price}</td>
                    </tr>)}
            </tbody>
        </table>
        {/* display total */}
        <p>Total: ${total}</p>
        {/* checkout button */}
        <Button 
        variant="contained"
        color="primary" 
        >Continue Shopping
        </Button>
        <div>
        <Button 
        variant="contained"
        color="primary" 
        >Place Order
        </Button>
        </div>
        </>
    );
};

export default ShoppingCart;