import React from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";
import {connect} from 'react-redux';

class ReduxEx2 extends React.Component {

    render() {
      return (
        <div>
          <SectionHeading heading="Redux Example 1"  />  
            <h4 className="mb-15 mt-20">Value: {this.props.value}</h4>
            <button className="btn-large mb-15" onClick={this.props.handleIncrement}>Increment</button>
            <button className="btn-large mb-15 ml-10" onClick={this.props.handleDecrement}>Decrement</button>
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
    handleDecrement: () => dispatch({type: "DECREMENT"}),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReduxEx2);