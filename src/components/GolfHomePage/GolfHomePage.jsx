import {Grid, Card, CardHeader, CardMedia} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GolfClubItems from '../GolfClubItems/GolfClubItems';
import { makeStyles } from '@material-ui/core/styles';
import './GolfHomePage.css';
const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
  });

function GolfHomePage() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const golfClubs = useSelector(store => store.golf)

    useEffect(() => {
        dispatch({ type: 'FETCH_CLUBS' })
    }, []);

    return(
        <>
            <h2>
                <CardMedia 
                    height="350"
                    component="img" 
                    image="images/Background Golf.jpeg"/>
            </h2>
       

        <Grid className="myClubs" container spacing={1} justify="center">
            <Card>
                <h3>Recent Listing</h3>
                {golfClubs.map(clubs => (
                   <GolfClubItems key={clubs.id} clubs = {clubs}/>
                ))}
            </Card>
            <Grid item xs={false} sm={8}>
        </Grid>
        </Grid>
        </>

    )
}
export default GolfHomePage;