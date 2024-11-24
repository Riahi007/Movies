import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div className="navContainer">
        <div>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c1c7415216623.5628e84fc8592.jpg" alt="" />
        </div>
        <div className='NavLinks'>
           <Link to={"/"} className="navLink"><p>Home</p></Link> 
           <Link to={"/admin"} className="navLink"><p>Admin</p></Link>
           <Link to={"/admin/add"} className="navLink"><p>Add New Movie</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
