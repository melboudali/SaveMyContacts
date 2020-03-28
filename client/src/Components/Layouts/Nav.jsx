import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../Context/Auth/AuthContext";
import Context from "../Context/Context/Context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ContactPhoneRoundedIcon from "@material-ui/icons/ContactPhoneRounded";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import IconNav from "../../Assets/Images/contacts.png";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(1),
    width: "60px"
  }
}));

const Nav = ({ title }) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { clearContacts } = useContext(Context);

  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authNav = () => {
    return (
      <Fragment>
        {/* <Button component={Link} to="/" color="inherit" className="NavLink">
          <AccountBoxIcon className="navICons" />
          <Typography variant="caption" className="LinkText">
            {user && user.name}
          </Typography>
        </Button> */}
        <Button onClick={onLogout} color="inherit" className="NavLink">
          <ExitToAppIcon className="navICons" />
          <Typography variant="caption" className="LinkText">
            LOGOUT
          </Typography>
        </Button>
        <Button
          component={Link}
          to="/About"
          color="inherit"
          className="NavLink"
        >
          <ContactSupportOutlinedIcon className="navICons" />
          <Typography variant="caption" className="LinkText">
            About
          </Typography>
        </Button>
      </Fragment>
    );
  };
  const gueastNav = () => {
    return (
      <Fragment>
        <Button
          component={Link}
          to="/signin"
          color="inherit"
          className="NavLink"
        >
          <KeyboardArrowRightIcon className="navICons" />
          <Typography variant="caption" className="LinkText">
            Get Started!
          </Typography>
        </Button>
        <Button
          component={Link}
          to="/About"
          color="inherit"
          className="NavLink"
        >
          <ContactSupportOutlinedIcon className="navICons" />
          <Typography variant="caption" className="LinkText">
            About
          </Typography>
        </Button>
      </Fragment>
    );
  };
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="sticky" className="Navbar">
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

            <img src={IconNav} className={classes.icon} />
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            {/* Hide on phone/tab */}
            <Hidden only="xs">
              {isAuthenticated ? authNav() : gueastNav()}
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

Nav.defaultProps = { title: "Save My Contacts" };
export default Nav;
