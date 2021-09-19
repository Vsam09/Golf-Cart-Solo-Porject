import {Grid, Card, Typography, CardMedia, CardContent} from '@material-ui/core';
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
                className="homeImage"
                height="350"
                component="img" 
                image='images/Background-Golf.jpeg'/>
            </h2>
        <Card>
            <CardContent>
                <Typography className="recentlistings" variant="h5" component="h3">Recent Listings</Typography>
            </CardContent>
                <Grid container spacing={3}>               
                    {golfClubs.map(clubs => (                     
                     <Grid key={clubs.id} item> 
                        <GolfClubItems clubs = {clubs}/> 
                    </Grid>                       
                    ))}
                </Grid>
        </Card>
        </>

    )
}
export default GolfHomePage;