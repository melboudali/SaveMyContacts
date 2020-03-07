import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Layouts/Nav";
import SignCont from "../SignComp/SignContainer";
import Contacts from "../Contacts/Contacts";
import About from "../Pages/About";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <Router>
      <Fragment>
        <Navbar title="Contact Saver" />
        <Container>
          <Switch>
            <Route exact path="/" component={SignCont} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default Home;
