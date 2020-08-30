import React from 'react';
import PropTypes from 'prop-types';
import {AuthStatus} from '../../constants/constants.js';

const UserProfile = ({
  authStatus,
}) => {
  return (
    <div className="user-block">
      {
        authStatus === AuthStatus.NO_AUTH
        ? <a href="/sing-in">Sing-in</a>
        : <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
      }
    </div>
  );
};

UserProfile.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

export default UserProfile;
