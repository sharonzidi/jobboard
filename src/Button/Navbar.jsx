import React from 'react';
import Profile from './Profile';

export default function Navbar(props) {
  return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Profile />
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Log In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}