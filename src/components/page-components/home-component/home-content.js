import React from "react";
import {UserName} from "../../common-components/utility-components/UserName";

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '<user name>', setusername: '<user name>'};
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({setusername: this.state.username });
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value });
  };
  

  render() {
    return (
      
      <div className="row mb-15">
         <div className="col s12 l6">
          <h4>Welcome, {this.state.setusername}</h4>
          
          <UserName heading={this.state.username} />
          
          <h5>This is content component.</h5>
        </div>
           <div className="col s12 l6">
            <h5>Enter your name here :</h5>
            <form onSubmit={this.mySubmitHandler}>
            <div className="input-field inline" >
              <input id="email_inline" type="text" maxLength="15" onChange={this.myChangeHandler}/>
              <label htmlFor="email_inline">Name</label>             
            </div>
          
            <button className="btn-small" type="submit">Set User Name</button>
            </form>
          </div> 
         
      
      </div>
    );
  }
}
export default HomeContent;