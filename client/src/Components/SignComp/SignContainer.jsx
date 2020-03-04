import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyTabs from "./TabsComp";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const SignContainer = () => {
  // Theme and Styling
  const useStyles = makeStyles(theme => ({
    root: {
      position: "relative",
      marginTop: "20px",
      transition: "all 1s"
    },
    paper: {
      textAlign: "center"
    }
  }));

  const classes = useStyles();
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item xs={10} sm={8} md={6} lg={4} xl={4} className={classes.root}>
          <Paper className={classes.paper} elevation={3}>
            <MyTabs />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignContainer;
