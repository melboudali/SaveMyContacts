import React, { useContext, Fragment } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import Context from "../Context/Context/Context";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContactFilter from "./ContactFilter";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import LoadingComp from "../Layouts/Loading";

const Contacts = () => {
  const context = useContext(Context);
  const { contacts, current, filtered, loading } = context;

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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item xs={8} sm={8} md={4} lg={4} xl={4}>
          {/* ContactForm */}
          <Typography variant="h6" className="addConHeader">
            {current ? "Edit Contact" : "Add New Contact"}
          </Typography>
          <ContactForm />
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={4}>
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
                    <ContactItem contact={c} />
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
    </Fragment>
  );
};

export default Contacts;
