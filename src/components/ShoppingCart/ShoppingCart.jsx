import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import { Button, Grid, CardContent, Card, Tooltip, Paper } from "@material-ui/core";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useEffect } from 'react';
import '../App/App.css';


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
        });
        history.push('/placeorder')
    }


    return (
        <div className="shoppingcart">
        <p>{user.username}</p>
        <Grid container xs={12} justifyContent="flex-end" >
         <Paper >
        <table>
            <thead>
                <tr><Grid>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price</th>
                    </Grid>
                </tr>
            </thead>
            <tbody style={{float: "right"}}>
                {shoppingCart.map((golf, i) => (
                    <tr key={i}>
                        <Grid item xs={12}>
                        <td><Card><img width="50px" src={golf.image} /> </Card> </td>
                        </Grid>
                       
                        <td>&nbsp;&nbsp;{golf.brand}</td>
                       
                        <td>&nbsp;&nbsp;{golf.price} <Button onClick={() => handleDelete(golf.cartid)}> Remove <DeleteForeverOutlinedIcon /> </Button></td>
                       
                    </tr>))}
                    <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    Total: ${newTotal}</p>
            </tbody>
        </table>
        </Paper>   
        </Grid>
        {/* display total */}
        
        {/* checkout button */}
        <Grid container direction="row-reverse">
        <Button 
            direction="row-reverse"
            variant="contained"
            color="secondary" 
            onClick={continueShopping}
            >Continue Shopping
        </Button>
        </Grid>
        <Grid container direction="row-reverse">

        <div>
         <Button 
            variant="contained"
            color="primary" 
            onClick={placeOrder}
            >Place Order
         </Button>
        </div>
        
        </Grid>

        </div>
    );
};

export default ShoppingCart;