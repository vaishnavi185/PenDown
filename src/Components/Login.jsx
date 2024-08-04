import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className='container' style={{ borderRadius: '20px', maxWidth: '1000px', backgroundColor: '#949EFF' ,padding:'40px', marginTop:'30px'}}>
      <div className="row">
        <div className="col-md-4" style={{ borderRadius: '20px', marginBottom: '20px' }}>
          <p className='p1'>Welcome Users</p>
          <img className='img-fluid' src='login.png' alt='Login'></img>
        </div>
        <div className="col-md-8" style={{ borderRadius: '20px', backgroundColor: 'white', padding:'30px' }}>
          <p className='p2'>Sign up</p>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInputName" placeholder="name" />
            <label htmlFor="floatingInputName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
            <label htmlFor="floatingInputEmail">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckAdmin" />
                <label className="form-check-label" htmlFor="flexCheckAdmin">
                  Sign in as admin
                </label>
              </div>
            </div>
            <div className='col'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckUser" />
                <label className="form-check-label" htmlFor="flexCheckUser">
                  Sign in as user
                </label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button" style={{backgroundColor: '#949EFF', border:'none'}}>Sign Up</button>
          </div>
          

        </div>
      </div>
    </div>
  );
}
