import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {TextField, Button} from '@material-ui/core';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      
      <section>
        <form action="submit">
            <div className="addform" style={{width: '450px'}}>
                        <TextField 
                        label="Brand Name" 
                        variant="outlined" 
                        style={{width: "75%"}} 
                        // value={title} 
                        /><br /><br />

                        <TextField textarea
                        label="Club Description" 
                        style={{width: "75%"}} 
                        multiline maxRows={6} 
                        variant="outlined" 
                        // value={description} 
                        /><br /><br />

                        <TextField 
                        label="Insert Image URL" 
                        style={{width: "75%"}} 
                        variant="outlined" 
                        // value={url} 
                        /><br /><br />

                        {/* <Button 
                        variant="contained" 
                        color="primary" 
                        >Edit</Button> */}

                        &nbsp;

                        <Button 
                        variant="contained" 
                        color="primary" 
                        >Post</Button> 

                    </div>
        </form>
    </section>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
