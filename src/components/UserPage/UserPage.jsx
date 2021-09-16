import React, {useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {TextField, Button} from '@material-ui/core';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [clubtype, setClubtype] = useState('');
  const [brand, setBrand] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const userItems = useSelector(store => store.userItems)

  useEffect(() => {
    dispatch({
      type: "FETCH_USER_ITEMS"
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

      confirm("Are you sure you want to Delete?")

    dispatch({
       type: 'DELETE_USER_ITEM',
      payload: id
     })
   }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {userItems.map(userItem => (
            <li key={userItem.id}> 
              <img src={userItem.image_path} />
              {userItem.brand} 
                {userItem.price}
            <Button>Edit</Button>
            <Button onClick={() => handleUsersDelete(userItem.id)}>Delete</Button>
            </li>
      ))}

      <section>
        <form action="submit">
            <div className="addform" style={{width: '450px'}}>
                        <TextField 
                        label="Club Type" 
                        variant="outlined" 
                        style={{width: "75%"}} 
                        value={clubtype} 
                        onChange={(event) => setClubtype(event.target.value)}
                        /><br /><br />
                        
                        <TextField 
                        label="Brand" 
                        variant="outlined" 
                        style={{width: "75%"}} 
                        value={brand} 
                        onChange={(event) => setBrand(event.target.value)}
                        /><br /><br />

                        <TextField textarea="true"
                        label="Club Description" 
                        style={{width: "75%"}} 
                        multiline maxRows={6} 
                        variant="outlined" 
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        /><br /><br />

                        <TextField 
                        label="Insert Image URL" 
                        style={{width: "75%"}} 
                        variant="outlined" 
                        value={url} 
                        onChange={(event) => setUrl(event.target.value)}
                        /><br /><br />

                        <TextField 
                        label="Price" 
                        style={{width: "75%"}} 
                        variant="outlined" 
                        value={price}
                        onChange={(event) => setPrice(event.target.value)} 
                        /><br /><br />

                        {/* <Button 
                        variant="contained" 
                        color="primary" 
                        >Edit</Button> */}

                        &nbsp;

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={PostNewClub}
                        >Post
                        </Button> 

              </div>
          </form>
      </section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
