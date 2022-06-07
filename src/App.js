import ReactDOM from "react-dom/client";
import Car from './Components/Car';
import Employee from "./Components/Employee";
import Events from "./Components/Events";
import Garage from "./Components/Garage";
import Goal from "./Components/Goal";

const App = () => {

  let listOFEmployee = ['sharvan kumar', 'Rahul','Ravi','Nishant','KP'];

  
  return (
    <div>
      {/* <Car/>       */}

      <Garage />

      {/* <Events /> */}
      {/* <Goal isGoal={true} /> */}

      {/* <Employee listOFEmployee = {listOFEmployee} /> */}
    </div>
  );
};


export default App;