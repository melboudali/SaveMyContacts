import React, { useContext } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Context from "../Context/Context/Context";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const context = useContext(Context);
  const { deleteContact, setCurrent, clearCurrent } = context;
  const onSetCurrent = () => {
    setCurrent(contact);
  };
  const onDeleteContact = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div>
      <Paper elevation={3} style={{ marginBottom: "10px" }}>
        <Card>
          <CardContent>
            <Typography
              variant="caption"
              className={`contactType ${
                type === "Personal" ? "typePer" : "typePro"
              }`}
              style={{ float: "right" }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
            <Typography>
              <AssignmentIndIcon className="cardIcons" />
              <span className="email">Name: {name}</span>
            </Typography>
            <Typography>
              <AlternateEmailIcon className="cardIcons" />
              <span className="email">Email: {email}</span>
            </Typography>
            <Typography>
              <PhoneIcon className="cardIcons" />
              <span className="phone">Phone: {phone}</span>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={onSetCurrent}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={onDeleteContact}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

ContactItem.propTypes = { contact: PropTypes.object.isRequired };

export default ContactItem;
