import React from "react";

function HeaderSearch() {
    return (
      <div className="hide-on-small-only">
           <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      </div>
    );
}
export default HeaderSearch;