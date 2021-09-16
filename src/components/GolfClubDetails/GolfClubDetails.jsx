import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {Grid, Card, Typography, Button, CardMedia, CardContent} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
  });

function GolfClubDetails({details}) {
    console.log('Club details', details)
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const addToCart = () => {

        dispatch({
            type: 'ADD_TO_CART',
            payload: details
        });

        // dispatch({
        //     type: 'ADD_PRICE',
        //     payload: details
        // });

        history.push('/shoppingcart')
    }

    return(
        <div>
            <Card>
        <h2>{details.brand}</h2>
        <CardMedia className={classes.root} height="250" component="img" image={details.image} />
        <Typography variant="h6">Price: ${details.price} <Button color="primary" onClick={addToCart}>Add To Cart</Button></Typography>
        <Typography>{details.description}</Typography>
        </Card>
        </div>
    )
}
export default GolfClubDetails;