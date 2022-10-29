/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { signInWithGoogle, auth, signOut } from "../services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { checkIfExistingUSerElseAddUser } from "../services/user";
import { NavLink, Link, withRouter } from "react-router-dom";

function Navbar() {
  const [user] = useAuthState(auth);
  if (user) checkIfExistingUSerElseAddUser(user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          Stellantis Performance Tracker
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active text-primary"
                to="/leaderboard"
              >
                Leaderboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active text-primary"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active text-primary"
                to="/actions"
              >
                Actions
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              {user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hi, {user.email}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button class="dropdown-item d-flex align-items-center">
                        <img
                          src={user.photoURL}
                          alt=""
                          className="rounded-circle me-1"
                          width="40px"
                          height="40px"
                        />
                        {user.displayName}
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={signOut}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <button
                  className="nav-link btn btn-dark text-white py-2 px-4"
                  onClick={signInWithGoogle}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
