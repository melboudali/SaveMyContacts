import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/Auth/AuthContext";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Home = () => {
  const { loadUser, token } = useContext(AuthContext);
  useEffect(() => {
    if (token) loadUser();
    // esling-disable-next-line
  });
  return (
    <div className="homeSection">
      <div className="sectionTitle">
        <h1>
          <span role="img" aria-label="Logo">
            🗃️
          </span>
          Save My Contacts
        </h1>
        <Typography variant="body2" className="sectionP" gutterBottom>
          Hello, this is a free application to save your contacts informations,
          i built this app using these technologies:
        </Typography>
        <Typography variant="body2" className="tecs" gutterBottom>
          <span className="M">M</span>
          <span className="E">E</span>
          <span className="R">R</span>
          <span className="N">N</span>:<span className="M MD">MongoDB</span>/
          <span className="E">ExpressJS</span>/
          <span className="R">ReactJS</span>/<span className="N">NodeJS</span>.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/signin"
          className="getStartedBtn"
        >
          <KeyboardArrowRightIcon className="btnIcon" />
          <span className="btnText">Get Started!</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
