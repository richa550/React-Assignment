import React , { useState}from "react";
import HomeContent from "./home-content";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";
function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="row">
        <SectionHeading heading="Home page" />
        <span className="helper-text">This page heading is coming by Props</span> 
        <h5 className="mb-15">I used Materialize CSS framework</h5>
        <div className="col s12"> 
          <HomeContent />
          <div className="hide-on-small-only">
            <h5>State Example :  <span>You clicked {count} times</span> <a className="btn-small" href="#!" onClick={() => setCount(count + 1)}>Click me</a></h5>
          </div>
          <h5 className="hide-on-small-only">This content visiable only Desktop and tablet.</h5>
          
        </div>
       
    </div>
  );
}

export default Home;