import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContainer from "../Auth/AuthContainer";
import HomePage from "../Home/Home";
import PrivateRoute from "../Routes/PrivateRoutes";
import Navbar from "../Layouts/Nav";
import Contacts from "../Contacts/Contacts";
import About from "../Pages/About";
import Container from "@material-ui/core/Container";

const Home = () => {
  
  return (
    <Router>
      <Fragment>
        <Navbar title="Save My Contacts" />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={AuthContainer} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/contacts" component={Contacts} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default Home;
