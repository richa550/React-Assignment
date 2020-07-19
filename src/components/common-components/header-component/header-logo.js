import React from "react";
import { Link } from 'react-router-dom';
function HeaderLogo() {
    return (
        <div>
            <Link to= "React-Assignment" className="brand-logo">Logo</Link>
            <a data-target="mobile-demo" href="#!" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    
       </div>
    );
}
export default HeaderLogo;