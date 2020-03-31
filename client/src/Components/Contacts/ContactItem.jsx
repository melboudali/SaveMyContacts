import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context/Context/Context";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const ContactItem = ({ contact, handleClickOpen }) => {
  const { _id, name, email, phone, type } = contact;
  const { deleteContact, setCurrent, clearCurrent } = useContext(Context);

  const onSetCurrent = () => {
    setCurrent(contact);
    handleClickOpen();
  };

  const onDeleteContact = () => {
    deleteContact(_id);
    clearCurrent();
  };
  
  return (
    <>
      <Paper elevation={3} className="ContactItem">
        <Card className="ContactItemCard">
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
              <span className="email">
                <span className="InfoType">Name:</span> {name}
              </span>
            </Typography>
            <Typography>
              <AlternateEmailIcon className="cardIcons" />
              <span className="email">
                <span className="InfoType">Email:</span> {email}
              </span>
            </Typography>
            <Typography>
              <PhoneIcon className="cardIcons" />
              <span className="phone">
                <span className="InfoType">Phone:</span> {phone}
              </span>
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className="ContactItemBtn"
              aria-label="add to favorites"
              onClick={onSetCurrent}
            >
              <EditIcon /> Edit
            </IconButton>
            <IconButton
              className="ContactItemBtn"
              aria-label="share"
              onClick={onDeleteContact}
            >
              <DeleteIcon /> Delete
            </IconButton>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};

ContactItem.propTypes = { contact: PropTypes.object.isRequired };

export default ContactItem;
