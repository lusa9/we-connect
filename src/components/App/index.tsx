import Menu from "components/Menu";
import Store from "Store";
import { BrowserRouter as Router } from "react-router-dom";

export default () => (
  <Store>
    <Router>
      <Menu />
    </Router>
  </Store>
);
