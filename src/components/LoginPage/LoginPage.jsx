import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core';
function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        Don't have an account?
        <Button
          variant="text"
          color="primary"
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
         &nbsp; Create Account
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
