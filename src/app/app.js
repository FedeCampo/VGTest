import Navbar from "../widgets/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Account } from "views/admin-dashboard/login/account";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
