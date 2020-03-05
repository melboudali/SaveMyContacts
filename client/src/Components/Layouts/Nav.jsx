import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ContactPhoneRoundedIcon from "@material-ui/icons/ContactPhoneRounded";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(to right, #e53935, #e35d5b)",
    opacity: ".7",
    transition: "all 1.6s",
    msTransition: "all 1.6s",
    MozTransition: "all 1.6s",
    height: "fit-content",
    "&:hover": { opacity: "1" },
    "& .MuiToolbar-regular": {
      minHeight: "50px !important",
      height: "50px !important"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const Nav = ({ title }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="sticky" className={classes.root}>
        <Container>
          <Toolbar>
            {/* Show on phone/tab */}
            <Hidden only={["sm", "md", "lg", "xl"]}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <ContactPhoneRoundedIcon className={classes.icon} />
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            {/* Hide on phone/tab */}
            <Hidden only="xs">
              <Button
                component={Link}
                to="/"
                color="inherit"
                className="NavLink"
              >
                <HomeIcon className="navICons" />
                <Typography variant="caption" className="LinkText">
                  Home
                </Typography>
              </Button>
              <Button
                component={Link}
                to="/About"
                color="inherit"
                className="NavLink"
              >
                <InfoIcon className="navICons" />
                <Typography variant="caption" className="LinkText">
                  About
                </Typography>
              </Button>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired
};

Nav.defaultProps = { title: "Contact Saver" };
export default Nav;
