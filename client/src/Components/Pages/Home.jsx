import React, { Fragment } from "react";
import Navbar from "../Layouts/Nav";
import Container from "@material-ui/core/Container";
import SignCont from "../SignComp/SignContainer";
import About from "../Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <Fragment>
        <Navbar title="Contact Saver" />
        <Container>
          <Switch>
            <Route exact path="/" component={SignCont} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default Home;
