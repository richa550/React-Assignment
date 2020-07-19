import React , {Component, useEffect,useState}from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";


class SearchUsers extends Component {
  token = null;
  state = {
    query: "1",
    people: [],
    selectedUser:""
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    const url = `https://jsonplaceholder.typicode.com/users?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {          
          this.setState({ people: data, selectedUser: query });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <div>
         <form> 
          <select onChange={this.onChange}>
            <option value="default" >Select User Id</option>
                {this.state.people.map(person => (
              <option value={person.id} key={person.id}>
                {person.id}
              </option>
              
            ))}
          </select>        
      </form>
          <p className="b">
          {this.state.people.filter(person => person.id == this.state.selectedUser ).map(filteredPerson => (
              <span key={filteredPerson.id}>
                User Selected :  {filteredPerson.name} 
              </span>
            ))}
          </p>
      </div>
     
    );
  }
}

export default SearchUsers;