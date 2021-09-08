import {Grid} from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        <h3>Recent Listing</h3>
        {golfClubs.map(clubs => (
            <p>{clubs.clubtype}
                <img src={clubs.image_path} />
            </p>
            // <img src={clubs.img_path} />
        ))}
        </>

    )
}
export default GolfHomePage;