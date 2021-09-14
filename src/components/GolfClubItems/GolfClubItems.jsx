import { useDispatch } from "react-redux";
import {useHistory} from 'react-router'
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function GolfClubItems({clubs}) {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const imageOnClick = () => {
        const id = clubs.id;
        dispatch({
            type: 'GET_DETAILS',
            payload: clubs.id
        })
        history.push(`/details/${id}`)
    }

    return(
        <div>
        <h3>{clubs.brand}</h3>
        <Container maxWidth="md">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img" 
                    onClick={imageOnClick} 
                    image={clubs.image_path} 
                    alt={clubs.clubtype}/> 
                </CardActionArea>
            </Card>
            </Container>
        </div>
    )
}
export default GolfClubItems;