import React from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";
import {connect} from 'react-redux';

class ReduxEx2 extends React.Component {

    render() {
      return (
        <div>
          <SectionHeading heading="Redux Example 2" />  
            <h6>Value: {this.props.value}</h6>
            <button className="btn-small mb-15" onClick={this.props.handleIncrement}>Increment</button>
            <button className="btn-small mb-15 ml-10" onClick={this.props.handleDecrement}>Decrement</button>
        </div>
      
      );
    }
  }
  const mapStateToProps = (state) =>{
    return{
      value: state.value
    }
  };

const mapDispatchToProps = (dispatch) =>{
  return{
    handleIncrement: () => dispatch({type: "INCREMENT"}),
    handleDecrement: () => dispatch({type: "DECREMENT"})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReduxEx2);