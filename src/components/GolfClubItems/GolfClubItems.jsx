import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
function GolfClubItems({clubs}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const imageOnClick = () => {
        console.log('Wheres my stuff',clubs.id)
        const id = clubs.id;
        dispatch({
            type: 'GET_DETAILS',
            payload: clubs.id
        })
        history.push(`/details/${id}`)
    }

    return(
        <div>
        <Grid item xs={false} sm={8}>
        <h3>{clubs.clubtype}</h3>
        <Card>
        <img onClick={imageOnClick} src={clubs.image_path} alt={clubs.clubtype}/>
        </Card>
        <Grid item xs={false} sm={8}>

        </Grid>
        </Grid>
        </div>
    )
}
export default GolfClubItems;