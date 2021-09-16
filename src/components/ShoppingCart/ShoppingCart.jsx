import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import { Button } from "@material-ui/core";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useEffect } from 'react';


function ShoppingCart() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_SHOPPING_CART',
        })
    }, [])
    // const store = useSelector(store => store)
    // const user = store.user;
    // const golfDetails = store.golfDetails;
    // const total = store.total;
    // const shoppingCart = store.shoppingCart;
    let [user, shoppingCart, total] = useSelector(state => {
        return [state.user, state.shoppingCart, state.total]
    }); 
    let newTotal = 0;
    if (shoppingCart.length > 0) {
        for ( let item of shoppingCart) {
            newTotal += Number(item.price);
        }
    }

    const handleDelete = (clubid) => {
        console.log('shoppping cart', clubid)

        dispatch({
          type: 'DELETE_ITEM',
          payload: clubid
        });
      };

    const continueShopping = () => {
        history.push('/HomePage')
      }

    const placeOrder = () => {
        dispatch({
            type: 'CLEAR_CART',
            payload: []
        })
        history.push('/placeorder')
    }


    return (
        <>
        <p>{user.username}</p>

        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {shoppingCart.map((golf, i) => (
                    <tr key={i}>
                        <td> <img width="50px" src={golf.image} /> {golf.brand}</td>
                        <td> {golf.price} <Button onClick={() => handleDelete(golf.cartid)}> Remove <DeleteForeverOutlinedIcon /> </Button></td>
                    </tr>))}
            </tbody>
        </table>
        {/* display total */}
        <p>Total: ${newTotal}</p>
        {/* checkout button */}
        <Button 
            variant="contained"
            color="primary" 
            onClick={continueShopping}
            >Continue Shopping
        </Button>
        <div>
         <Button 
            variant="contained"
            color="primary" 
            onClick={placeOrder}
            >Place Order
         </Button>
        </div>
        </>
    );
};

export default ShoppingCart;