import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import { Button } from "@material-ui/core";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


function ShoppingCart() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [user, golfDetails, total] = useSelector(state => {
        return [state.user, state.shoppingCart, state.total]
    }); 

    // dispatch({
    //     type: 'GET_DETAILS',
    //     payload: details
    // })
    const handleDelete = (clubid) => {
        console.log('shoppping cart', clubid)

        dispatch({
          type: 'DELETE_ITEM',
          payload: clubid
        });
      }

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
                {golfDetails.map((golf, i) => (
                    <tr key={i}>
                        <td> <img width="50px" src={golf.image} /> {golf.brand}</td>
                        <td> {golf.price} <Button onClick={() => handleDelete(golf.clubid)}> <DeleteForeverOutlinedIcon /> </Button></td>
                    </tr>))}
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