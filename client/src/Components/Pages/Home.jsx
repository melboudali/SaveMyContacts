import React, { Fragment, useContext, useEffect } from "react";
import Navbar from "../Layouts/Nav";
import Container from "@material-ui/core/Container";
import SignCont from "../SignComp/SignContainer";
import About from "../Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Context from "../Context/Context/Context";
import contacts from "../Contacts/Contacts";

const Home = () => {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context.contacts);
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar title="Contact Saver" />
        <Container>
          <Switch>
            <Route exact path="/" component={SignCont} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={contacts} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
};

export default Home;
