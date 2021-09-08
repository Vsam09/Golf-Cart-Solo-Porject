import {Grid, Card, CardHeader, CardMedia} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GolfClubItems from '../GolfClubItems/GolfClubItems';

function GolfHomePage() {

    const dispatch = useDispatch();
    const golfClubs = useSelector(store => store.golf)

    useEffect(() => {
        dispatch({ type: 'FETCH_CLUBS' })
    }, []);

    return(
        <>
        <Grid variant="contained">
            <h2>The Place to Buy and Sell Your Golf Clubs</h2>
        </Grid>
        <Grid item xs={false} sm={8}>
        <Card>
        <h3>Recent Listing</h3>
        {golfClubs.map(clubs => (
            <GolfClubItems clubs = {clubs}/>
        ))}
        </Card>
        <Grid item xs={false} sm={8}>
        </Grid>
        </Grid>
        </>

    )
}
export default GolfHomePage;