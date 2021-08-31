import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/adduser"exact>
         <AddUser></AddUser>
       </Route>
       <Route path="/authResult">
         <AuthResult></AuthResult>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
