import React, { useState, useContext, Fragment, useEffect } from "react";
import AuthContext from "../Context/Auth/AuthContext";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import Context from "../Context/Context/Context";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContactFilter from "./ContactFilter";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import LoadingComp from "../Layouts/Loading";
import Fab from "@material-ui/core/Fab";
// Dialog
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const Contacts = () => {
  const { contacts, current, filtered, loading, clearCurrent } = useContext(
    Context
  );
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    clearCurrent();
  };

  const showLoading = () => {
    if (loading) {
      return <LoadingComp />;
    }
  };

  const contactNotFound = () => {
    if (filtered !== null && filtered.length === 0) {
      return (
        <CSSTransition timeout={1000} classNames="contact">
          <h5>No Contact Founded</h5>
        </CSSTransition>
      );
    }
  };

  return (
    <Fragment>
      {/* Dialog */}
      <Dialog
        className="dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="addConHeader">
          {current ? "Edit Contact" : "Add New Contact"}
        </DialogTitle>
        <DialogContent>
          {/* ContactForm */}
          <ContactForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      {/*  */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={1}
      >
        {/* <Grid item xs={8} sm={8} md={4} lg={4} xl={4}></Grid> */}
        <Grid item xs={10} sm={8} md={8} lg={5} xl={5}>
          {/* Contacts List */}
          <Typography variant="h6" className="addConHeader">
            Contacts List
          </Typography>
          <ContactFilter />
          {showLoading()}
          {contactNotFound()}
          <TransitionGroup>
            {filtered === null
              ? contacts.map(c => (
                  <CSSTransition key={c.id} timeout={1000} classNames="contact">
                    <ContactItem
                      contact={c}
                      handleClickOpen={handleClickOpen}
                    />
                  </CSSTransition>
                ))
              : filtered.map(c => (
                  <CSSTransition key={c.id} timeout={1000} classNames="contact">
                    <ContactItem contact={c} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        </Grid>
      </Grid>
      <div className="fabContainer">
        <Fab
          variant="extended"
          aria-label="add"
          className="fab"
          onClick={handleClickOpen}
        >
          <AddIcon /> Add Contact
        </Fab>
      </div>
    </Fragment>
  );
};

export default Contacts;
