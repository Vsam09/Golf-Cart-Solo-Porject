import React, {useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {TextField, Button, Typography} from '@material-ui/core';
import { useParams, useHistory} from 'react-router-dom';
import {Grid, Card, CardContent, makeStyles, CardActions} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();


  const [clubtype, setClubtype] = useState('');
  const [brand, setBrand] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const userItems = useSelector(store => store.userItems)

  useEffect(() => {
    dispatch({
      type: "FETCH_USER_ITEMS",
      payload: params.id
     })
   }, []);

  const PostNewClub = () => { 
      if (brand == "" || description == "" || url == "" || price == "" || clubtype == "") { 
          alert('Please fill in all inputs');
          return false;
      };
      dispatch({ 
          type: "ADD_NEW_CLUB",
          payload: { brand: brand, description: description, image_path: url, price: price, clubtype: clubtype }
      });
  };

  const handleUsersDelete = (id) => {
      confirm("Are you sure you want to delete item?")
      
    dispatch({
       type: 'DELETE_USER_ITEM',
      payload: id
     })
   }

  return (
    <div>
      <h2>Welcome, {user.username}! &nbsp; <LogOutButton  /></h2>
      <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="stretch" >
      <Grid item xs={6} >
      <section>
        <form action="submit">
            <div className="addform" style={{width: '450px'}}>
                        <TextField 
                        label="Club Type" 
                        variant="filled" 
                        style={{width: "75%"}} 
                        value={clubtype} 
                        onChange={(event) => setClubtype(event.target.value)}
                        /><br /><br />
                        
                        <TextField 
                        label="Brand" 
                        variant="filled" 
                        style={{width: "75%"}} 
                        value={brand} 
                        onChange={(event) => setBrand(event.target.value)}
                        /><br /><br />

                        <TextField textarea="true"
                        label="Club Description" 
                        style={{width: "75%"}} 
                        multiline maxRows={6} 
                        variant="filled" 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        /><br /><br />

                        <TextField 
                        label="Insert Image URL" 
                        style={{width: "75%"}} 
                        variant="filled" 
                        value={url} 
                        onChange={(event) => setUrl(event.target.value)}
                        /><br /><br />

                        <TextField 
                        label="Price" 
                        style={{width: "75%"}} 
                        variant="filled" 
                        value={price}
                        onChange={(event) => setPrice(event.target.value)} 
                        /><br /><br />

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={PostNewClub}
                        >Post
                        </Button> 

              </div>
          </form>
      </section>
      </Grid>
      <Grid  item xs={6} sm={3}>
        <Grid container>
      {userItems.map(userItem => (   
              <Grid item xs> &nbsp;
                <Card key={userItem.id}>
                <CardContent className={classes.card}><img style={{height: "75%"}} src={userItem.image_path} />
              <Typography>{userItem.brand} </Typography>
              <Typography>${userItem.price}</Typography>
           
          </CardContent>
          <CardActions> &nbsp; &nbsp; &nbsp; 
          <Button onClick={() => history.push('/edit')}>Edit</Button>
          <Button color="secondary" onClick={() => handleUsersDelete(userItem.id)}>Delete</Button>
          </CardActions>
          </Card>
         </Grid>
      ))}
      </Grid>
      </Grid>
      </Grid>
     
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
