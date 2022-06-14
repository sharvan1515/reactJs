import ReactDOM from "react-dom/client";
import Car from './Components/Car';
import Employee from "./Components/Employee";
import Events from "./Components/Events";
import Garage from "./Components/Garage";
import Goal from "./Components/Goal";
import School from "./Components/School";
import Testing from "./Components/Testing";
import MyForm from "./Myform/MyForm";

const App = () => {

  let listOFEmployee = ['sharvan kumar', 'Rahul','Ravi','Nishant','KP'];

  
  return (
    <>
      <MyForm />
      {/* <Testing /> */}
      {/* <School /> */}
      {/* <Car/>       */}

      {/* <Garage /> */}

      {/* <Events /> */}
      {/* <Goal isGoal={true} /> */}

      {/* <Employee listOFEmployee = {listOFEmployee} /> */}
    </>
  );
};


export default App;