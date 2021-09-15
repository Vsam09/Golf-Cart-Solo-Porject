import React from 'react';
import { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import { useDispatch, useSelector } from 'react-redux';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Driver() {

    const golfDetails = useSelector(store => store.golfDetails);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'GET_CLUB_TYPE' })
    // }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDriver = () => {
        dispatch({
            type: 'GET_CLUB_TYPE',
            payload: golfDetails
        })
    }
    return(
        <>
         <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Driver" onClick={handleDriver} />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Wood" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Hybrid" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Wedge" />
        </StyledMenuItem>

         <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Irons" />
        </StyledMenuItem>

         <StyledMenuItem>
          <ListItemIcon>
            <SportsGolfIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Putter" />
        </StyledMenuItem>
      </StyledMenu>
        </>
    )
}
export default Driver;