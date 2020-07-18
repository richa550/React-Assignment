import React from "react";
import HeaderLogo from "./header-logo";
import HeaderNavigation from "./header-navigation";
import HeaderSearch from "./header-search";
function Header() {
  return (
	<div className="container-fluid">
		<div className="navbar-fixed">
		<nav>
    		<div className="nav-wrapper">
				<div className="row">
				<div className="col s3">
					<HeaderLogo />
				</div>
				<div className="col s3">
				<HeaderSearch />
				</div>
				<div className="col s6">
					<HeaderNavigation />     
				</div>
			</div>	
			</div>
		</nav>
		</div>	
	</div>
  );
}
export default Header;