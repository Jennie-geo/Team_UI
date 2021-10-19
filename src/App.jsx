import { Link } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Sidebar from "./team/Sidebar";
// import UserProfileDetail from "./team/UserProfileDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Sidebar} />
        {/* <Route path="/userdetail/:id" component={UserProfileDetail} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
