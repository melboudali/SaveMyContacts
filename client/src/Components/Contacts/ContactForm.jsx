import React, { useState, useContext, useEffect } from "react";
import Context from "../Context/Context/Context";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const ContactForm = () => {
  const context = useContext(Context);
  const { addContact, clearCurrent, current, updateContact } = context;
  useEffect(() => {
    current
      ? setContact(current)
      : setContact({ name: "", email: "", phone: "", type: "Personal" });
  }, [context, current]);
  const [getContact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Personal"
  });
  const onChange = e => {
    setContact({ ...getContact, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (current !== null) {
      updateContact(getContact);
    } else {
      addContact(getContact);
    }
    clearCurrent();
  };
  return (
    <Paper elevation={3}>
      <form onSubmit={onSubmit} className="addConForm" autoComplete="off">
        <FormControl className="addConInput" fullWidth>
          <InputLabel htmlFor="name">
            Name
            <span className="required">*</span>
          </InputLabel>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={getContact.name}
            onChange={onChange}
            required
          />
        </FormControl>

        <FormControl className="addConInput" fullWidth>
          <InputLabel htmlFor="email">
            Email
            <span className="required">*</span>
          </InputLabel>
          <Input
            id="email"
            name="email"
            placeholder="email@gmail.com"
            type="email"
            value={getContact.email}
            onChange={onChange}
            required
          />
        </FormControl>

        <FormControl className="addConInput" fullWidth>
          <InputLabel htmlFor="phone">
            Phone
            <span className="required">*</span>
          </InputLabel>
          <Input
            id="phone"
            name="phone"
            placeholder="+3322114433"
            value={getContact.phone}
            onChange={onChange}
            type="text"
            required
          />
        </FormControl>
        <FormControl component="fieldset" className="conType">
          <FormLabel component="legend" color="secondary">
            Contact Type
          </FormLabel>
          <RadioGroup
            aria-label="position"
            name="type"
            value={getContact.type}
            onChange={onChange}
            row
          >
            <FormControlLabel
              value="Personal"
              control={<Radio color="secondary" />}
              label="Personal"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Professional"
              control={<Radio color="secondary" />}
              label="Professional"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          className="primaryBtn"
          fullWidth
        >
          <span className="textBtn">
            {current ? "Update Contact" : "Add Contact"}
          </span>
        </Button>
        {current && (
          <Button
            variant="contained"
            className="clearBtn"
            onClick={()=>clearCurrent()}
            fullWidth
          >
            <span className="textBtn">Clear</span>
          </Button>
        )}
      </form>
    </Paper>
  );
};

export default ContactForm;
