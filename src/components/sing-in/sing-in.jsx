import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAuthStatus} from '../../redux/user/selectors.js';
import UserOperation from '../../redux/user/operation.js';
import MovieHeader from "../movie-header/movie-header.jsx";

class SingIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
  }

  getInputValue(key, value) {
    this.setState({
      [key]: value
    });
  }

  getAuthData() {
    const {
      email,
      password
    } = this.state;

    return {
      email,
      password
    };
  }

  render() {
    const {
      onSingIn,
      authStatus
    } = this.props;

    return (
      <div className="user-page">

        <MovieHeader
          headerClass={`user-page__head`}
          title={{
            name: `Sign in`,
            class: `page-title user-page__title`,
          }}
          authStatus={authStatus}
        />

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  onChange={({target}) => {
                    this.getInputValue(`email`, target.value);
                  }}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  onChange={({target}) => {
                    this.getInputValue(`password`, target.value);
                  }}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const authData = this.getAuthData();
                  onSingIn(authData);
                }}>Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SingIn.propTypes = {
  onSingIn: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  authStatus: getAuthStatus(state),
});

const mapDispatch = (dispatch) => ({
  onSingIn(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {SingIn};
export default connect(mapState, mapDispatch)(SingIn);
