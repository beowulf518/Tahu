import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all the themes
// import ThemeOne from "../themes/theme-one";
import ExploreOne from "../themes/explore-one";
import ItemDetails from "../themes/item-details";
import Dashboard from "../pages/Dashboard/Dashboard";
import Header from '../components/Header/Header';

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            {/* <Route exact path="/" component={ThemeOne} /> */}
            <Route exact path="/" component={ExploreOne} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/item-details/:id" component={ItemDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;