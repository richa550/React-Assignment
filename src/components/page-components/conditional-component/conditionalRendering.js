import React from "react";
import UserSession from "../../common-components/utility-components/user-session/userSession";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";

class conditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userSessionState: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      userSessionState: !state.userSessionState
    }));
  }

  render() {
    return (
      <div>
        <SectionHeading heading="Conditional Component Rendering " />  
          <p>Conditional Rendering on Button Click : </p>
          <button className="btn-small mb-15" onClick={this.handleClick}>
            {this.state.userSessionState ? 'Logout' : 'Login'}
          </button>
          <UserSession isLoggedIn={this.state.userSessionState} />       
      </div>
    
    );
  }
}


export default conditionalRendering;