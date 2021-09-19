import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import Card from '@material-ui/core/Card';
import { Container, Grid, Button, Typography, CardContent } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
        root: {
        maxWidth: 200,
        '& > *': {
            margin: theme.spacing(0),
            width: '20ch',
        },
        },
        card: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
    }));

function GolfClubItems({clubs}) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const imageOnClick = () => {
        const id = clubs.id;
        console.log('where are my clubs', clubs)
        dispatch({
            type: 'GET_DETAILS',
            payload: clubs.id
        })
        history.push(`/details/${id}`)
    }

    return(
        <div>
            <Grid container >
                <Grid item >
            <Card className={classes.root} onClick={imageOnClick} >
                <CardActionArea >
                    <CardContent >
                        <img src={clubs.image_path}/>
                        <Typography variant="body2" component="h1">
                            {clubs.brand}
                        </Typography>
                        <Typography variant="overline" >{clubs.price}</Typography>        
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
            </Grid>
        </div>
    )
}
export default GolfClubItems;