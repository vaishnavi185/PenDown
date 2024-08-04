import React from 'react';
import './login.css';

export default function Signup(){
  return (
    <div className='container' style={{ borderRadius: '20px', maxWidth: '1000px', backgroundColor: '#949EFF' ,padding:'40px', marginTop:'30px'}}>
      <div className="row">
        <div className="col-md-4" style={{ borderRadius: '20px', marginBottom: '20px' }}>
          <p className='p1'>Pen Down</p>
          <img className='img-fluid' src='book.png' alt='Login'></img>
        </div>
        <div className="col-md-8" style={{ borderRadius: '20px', backgroundColor: 'white', padding:'30px' }}>
          <p className='p2'>Login</p>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInputName" placeholder="username" />
            <label htmlFor="floatingInputName">Username</label>
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
            <button className="btn btn-primary" type="button" style={{backgroundColor: '#949EFF', border:'none'}}>Login</button>
          </div>
          <br></br>
          <div className="d-flex  align-items-center">
            <span style={{fontSize:'10px'}}>New user</span>
            <button className="btn" type="button" style={{backgroundColor: 'white', border:'none',color:'#949EFF',fontSize:'10px'}}>Sign Up</button>
            <button className="btn" type="button" style={{backgroundColor: 'white', border:'none',color:'#949EFF', marginLeft:'280px'}}>Forgot passward</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
