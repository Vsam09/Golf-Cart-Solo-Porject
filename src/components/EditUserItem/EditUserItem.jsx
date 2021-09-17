import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

function EditUserItem() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const club = useSelector(store => store.userEdit);

  useEffect(() => {
    if (params.id === undefined) {
      dispatch({
        type: 'RESET_EDIT_CLUB'
      });
    }
    else {
      dispatch({
        type: 'GET_DETAILS',
        payload: { 
          userid: params.id 
        }
      });
    }
  }, [params.id]);

  const onSave = () => {
    dispatch({
      type: 'SAVE_USER_EDIT', 
      payload: club
    });

    // Go back to previous view
    onCancel();
  }

  const updateClub = (updates) => {
    dispatch({
      type: 'UPDATE_EDIT_CLUB',
      payload: updates
    });
  }


  const onCancel = () => {
    // If we're in "Add move mode", go back to list view
    if (params.id === undefined) {
      history.push('/user')
    }
    // IF we're in edit mode, go back to details view
    else {
      history.push(`/user/${params.id}`)
    }
  }
  
  return (
    <section>
        <form action="submit">
            <div className="addform" style={{width: '450px'}}>
                        <TextField 
                        label="Club Type" 
                        variant="outlined" 
                        style={{width: "75%"}} 
                        value={club.clubtype} 
                        onChange={(event) => updateClub({clubtype: event.target.value})}
                        /><br /><br />
                        
                        <TextField 
                        label="Brand" 
                        variant="outlined" 
                        style={{width: "75%"}} 
                        value={club.brand} 
                        onChange={(event) => updateClub({brand: event.target.value})}
                        /><br /><br />

                        <TextField textarea="true"
                        label="Club Description" 
                        style={{width: "75%"}} 
                        multiline maxRows={6} 
                        variant="outlined" 
                        value={club.description} 
                        onChange={(event) => updateClub({description: event.target.value})}
                        /><br /><br />

                        <TextField 
                        label="Insert Image URL" 
                        style={{width: "75%"}} 
                        variant="outlined" 
                        value={club.url} 
                        onChange={(event) => updateClub({url: event.target.value})}
                        /><br /><br />

                        <TextField 
                        label="Price" 
                        style={{width: "75%"}} 
                        variant="outlined" 
                        value={club.price}
                        onChange={(event) => updateClub({price: event.target.value})} 
                        /><br /><br />

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={onCancel}
                        >Cancel</Button>

                        &nbsp;

                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={onSave}
                        >Save
                        </Button> 

              </div>
          </form>
      </section>
  );
}


export default EditUserItem;
