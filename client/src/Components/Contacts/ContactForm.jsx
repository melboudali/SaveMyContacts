import React, { useState, Fragment, useContext, useEffect } from "react";
import Context from "../Context/Context/Context";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const ContactForm = ({ handleClose }) => {
  
  const { addContact, clearCurrent, current, updateContact } = useContext(
    Context
  );

  useEffect(() => {
    current
      ? setContact(current)
      : setContact({ name: "", email: "", phone: "", type: "Personal" });
  }, [current]);

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
    handleClose();
    current === null ? addContact(getContact) : updateContact(getContact);
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} className="addConForm" autoComplete="off">
      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="name">
          Name
          <span className="required">*</span>
        </InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          value={getContact.name}
          onChange={onChange}
          required
        />
      </FormControl>

      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="email">
          Email
          <span className="required">*</span>
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={getContact.email}
          onChange={onChange}
          required
        />
      </FormControl>

      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="phone">
          Phone
          <span className="required">*</span>
        </InputLabel>
        <Input
          id="phone"
          name="phone"
          value={getContact.phone}
          onChange={onChange}
          type="text"
          required
        />
      </FormControl>
      <FormControl component="fieldset" className="conType">
        <FormLabel component="legend" className="radioTitle">
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
            control={<Radio className="radioBtn" />}
            label="Personal"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Professional"
            control={<Radio className="radioBtn" />}
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
          onClick={() => clearCurrent()}
          fullWidth
        >
          <span className="textBtn">Clear</span>
        </Button>
      )}
    </form>
  );
};

export default ContactForm;
