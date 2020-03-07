import React, { useContext, Fragment } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import Context from "../Context/Context/Context";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Contacts = () => {
  const context = useContext(Context);
  const { contacts, current } = context;
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
          {contacts.map(c => (
            <ContactItem key={c.id} contact={c} />
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Contacts;
