import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"

function ShoppingCart() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [user, golfDetails, golf] = useSelector(state => {
        return [state.user, state.golfDetails, state.golf]
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
                {/* map function to create rows */}
                {golf.map(golf => 
                    <tr>
                        <td><img width="50px" src={golf.image_path} /> {golf.brand}</td>
                        <td>{golf.price}</td>
                    </tr>)}
            </tbody>
        </table>
        {/* display total */}
        <p>total goes here(ToDo)</p>
        {/* checkout button */}
        <button className="btn btn-primary" >Proceed to Checkout</button>
        </>
    );
};

export default ShoppingCart;