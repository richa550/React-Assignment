import React from "react";
import {Link } from 'react-router-dom';

const HeaderNavigation= () => {
    return (
        <div>
        <ul className="center hide-on-med-and-down">        
                <li className="active"><Link to= "/">Home</Link></li>
                <li><Link to= "conditionalRendering">Conditional Rendering Example</Link></li>
                <li><Link to= "user">API Example</Link></li>
                <li><Link to= "redux">Redux Example</Link></li>
        </ul>
        <ul className="sidenav" id="mobile-demo">
        <li className="active"><Link to= "/">Home</Link></li>
                <li><Link to= "conditionalRendering">Conditional Rendering Ex</Link></li>
                <li><Link to= "user">User API Ex</Link></li>
                <li><Link to= "redux">Redux Ex</Link></li>
      </ul>
      </div>
    );
}
export default HeaderNavigation;