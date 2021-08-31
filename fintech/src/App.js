import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/adduser"exact>
         <AddUser></AddUser>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
