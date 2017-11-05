import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
 
 
const responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj.familyName)
}
export class GoogleComponent extends React.Component{
    render(){
        return <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />;
    }
}
/* ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
); */