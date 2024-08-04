// userpanel.jsx
import React from 'react';
import './user.css';
import Card from './card';
import Profile from './Profile';

export default function Userpanel() {
  return (
    <div className='con'>
      <div className="row">
        <div className="col-4">
          {/* Sidebar or any content for the left column */}
        </div>
        <div className="col-8">
          <div className='Panel'>
            <br />
            <nav className="navbar ">
              <div className="container-fluid">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn" type="submit">Search</button>
                </form>
                <Profile />
              </div>
            </nav>
            <br />
            <br />
            
            <Card />
            <br></br>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
