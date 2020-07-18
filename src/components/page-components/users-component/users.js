import React , {useEffect,useState}from "react";
import {SectionHeading} from "../../common-components/utility-components/SectionHeading";

function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setItems] = useState([]);

  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          console.log("result",result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">       
         <SectionHeading heading="API Example" />  
         <div className="col s12 l6">
            <ul className="user-data">
              {result.map((item, key) =>
              <li key={item.id}><span className="b">ID: </span>{item.id}<span className="b ml-10">Name:</span> {item.employee_name}<span className="b ml-10">Age: </span>{item.employee_age}<span className="b ml-10">Salary: </span>{item.employee_salary}</li>    
              )}
            </ul>
         </div>
         <div className="col s12 l6">
                
          </div>
      </div>
    );
  }
}
export default Users;