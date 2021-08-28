import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing all the themes
// import ThemeOne from "../themes/theme-one";
import ExploreOne from "../themes/explore-one";
import ItemDetails from "../themes/item-details";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={ThemeOne} /> */}
            <Route exact path="/" component={ExploreOne} />
            <Route exact path="/item-details/:id" component={ItemDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;