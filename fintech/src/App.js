import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import Main from "./pages/Main";


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
       <Route path="/main">
         <Main></Main>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
