import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactPhoneRoundedIcon from "@material-ui/icons/ContactPhoneRounded";
import Hidden from "@material-ui/core/Hidden";

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

const Nav = () => {
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
              Contact Savers
            </Typography>
            {/* Hide on phone/tab */}
            <Hidden only="xs">
              <Button color="inherit">Login</Button>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Nav;
