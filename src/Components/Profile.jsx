import React from 'react';

export default function Profile() {
  return (
    <div>
      <p>
        <span  >Hi user</span>
        <button className="btn1 " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" style={{backgroundColor:'transparent',border:'none'}}>
          <img src="profile-icon.png" alt="Profile Icon" style={{ width: '50px', height: '50px' }} />
        </button>
        
      </p>
      <div className="row">
       
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
                hii user,
                <br></br>
            Email@gmail.com

              <button className="btn">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}