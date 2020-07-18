import React , {Component, useEffect,useState}from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res =>   res.json())
      .then(json => {
        console.log(json)
        this.setState({
          items: json.data
        });
        console.log(this.state.items);
  })}
  render() {
  var { items = [] } = this.state.items;
  console.log(items);
      return (
        <div >
          <SectionHeading heading="API Example" />
          {items}
         <ul>
           
           {items.map( item => (
             <li key={item.id}> Name : {item.id}</li>
           ))}
         </ul>
      </div>
      )
    
  }
}
export default Users;