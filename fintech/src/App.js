import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import Balance from "./pages/Balance";
import Main from "./pages/Main";
import QrCode from "./pages/QrCode";


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
       <Route path="/balance">
         <Balance></Balance>
       </Route>
       <Route path="/qrcode">
         <QrCode></QrCode>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
