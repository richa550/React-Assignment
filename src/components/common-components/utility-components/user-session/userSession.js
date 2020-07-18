import React from 'react';
import LoggedUSer from './loggedUser';
import GuestUSer from './guestUser';

function UserSession(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LoggedUSer />;
    }
    return <GuestUSer />;
  }

export default UserSession;
