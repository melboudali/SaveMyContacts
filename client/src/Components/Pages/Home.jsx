import React, { Fragment } from "react";
import Navbar from "../Layouts/Nav";
import Container from "@material-ui/core/Container";
import SignCont from "../SignComp/SignContainer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <SignCont />
      </Container>
    </Fragment>
  );
};

export default Home;
