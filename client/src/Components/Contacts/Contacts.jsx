import React, { useState, useContext, Fragment, useEffect } from "react";
import AuthContext from "../Context/Auth/AuthContext";
import Alert from "@material-ui/lab/Alert";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import Context from "../Context/Context/Context";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContactFilter from "./ContactFilter";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import Fab from "@material-ui/core/Fab";
// Dialog
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const Contacts = () => {
  const {
    getContacts,
    contacts,
    current,
    filtered,
    contactAlert,
    clearCurrent
  } = useContext(Context);
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    getContacts();
    // eslint-disable-next-line
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    clearCurrent();
  };

  const contactNotFound = () => {
    if (filtered !== null && filtered.length === 0) {
      return (
        <CSSTransition timeout={1000} classNames="contact">
          <h5 className="NotFoundTitle">No Contacts Found!</h5>
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
        <Grid item xs={10} sm={8} md={8} lg={5} xl={5}>
          {/* Contacts List */}
          <Typography variant="h6" className="addConHeader">
            Contacts List
          </Typography>
          <ContactFilter />
          {contactAlert && (
            <Alert severity={contactAlert.type} variant="filled" id="alert">
              {contactAlert.msg}
            </Alert>
          )}
          {contactNotFound()}
          {contacts !== null ? (
            <TransitionGroup>
              {filtered === null
                ? contacts.map(c => (
                    <CSSTransition
                      key={c._id}
                      timeout={1000}
                      classNames="contact"
                    >
                      <ContactItem
                        contact={c}
                        handleClickOpen={handleClickOpen}
                      />
                    </CSSTransition>
                  ))
                : filtered.map(c => (
                    <CSSTransition
                      key={c._id}
                      timeout={1000}
                      classNames="contact"
                    >
                      <ContactItem contact={c} />
                    </CSSTransition>
                  ))}
            </TransitionGroup>
          ) : (
            <CSSTransition timeout={1000} classNames="contact">
              <h5 className="NotFoundTitle">
                No Contacts Found! Please Add New
              </h5>
            </CSSTransition>
          )}
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
