import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Driver from '../Driver/Driver';

//Imported Material UI
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


// const useStyles = makeStyles((theme) => ({
  

function Nav() {
  const user = useSelector((store) => store.user);
  // const classes = useStyles();
  const history = useHistory();
 

  const handleMyAccount = () => {
    history.push('/user')
  }
  
  

  return (
    <div className="nav">
      <Link to="/HomePage">
        <h2 className="nav-title">
          <img width="130" src="images/Golf.jpg"/></h2>
      </Link>
      <Link to="/HomePage">
        <h2 className="nav-title">Golf Cart</h2>        
      </Link>
          
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleMyAccount}>My Account
          </Button>
          <div >
      
      <div>
    
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/HomePage">
              <Button 
              variant="contained" 
              color="primary">Home</Button>
            </Link>

            <Link className="navLink" to="/info">
              <Button variant="contained" 
            color="primary" >Info</Button>
            </Link>
            <Driver /> 
            {/* <Button variant="contained" 
            color="primary" ><LogOutButton  /></Button> */}

            <Link className="navLink" to="/shoppingcart">
              <ShoppingCartIcon />
            </Link>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default Nav;
