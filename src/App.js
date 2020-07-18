import React  from 'react';
import Header from "./components/common-components/header-component/header";
import Footer from "./components/common-components/footer-components/footer";
import Home from "./components/page-components/home-component/home"; 
import conditionalRendering from "./components/page-components/conditional-component/conditionalRendering";
import Users from "./components/page-components/users-component/users";
import ReduxEx from "./components/page-components/redux-example/reduxEx";
import { BrowserRouter , Route ,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <header className="App-header">
        <Header/>
        
      </header>
     <section className="App-Container">          
     <div className="container">
      <div className="row">
        <div className="col s12">
         <Switch>
           <Route path="/"  component={Home} exact />
           <Route path = "/conditionalRendering" component = {conditionalRendering} />
            <Route path = "/user" component = {Users} />
            <Route path = "/redux" component = {ReduxEx} />
          </Switch>
          </div>
          </div>
          </div>
      </section>
      <footer className="App-footer">
        <Footer />
      </footer> 
      </BrowserRouter>
    </div>
  );
}

export default App;
