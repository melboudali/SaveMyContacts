import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Paper elevation={3}>
        <Card>
          <CardContent>
          <Typography
                variant="caption"
                className={`contactType ${
                  type === "personal" ? "typePer" : "typePro"
                }`}
                style={{float: "right"}}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Typography>
              <Typography>
              <AssignmentIndIcon className="cardIcons"/><span className="email">Name: {name}</span>
            </Typography>
            <Typography>
              <AlternateEmailIcon className="cardIcons"/><span className="email">Email: {email}</span>
            </Typography>
            <Typography>
              <PhoneIcon className="cardIcons"/>
              <span className="phone">Phone: {phone}</span>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="share">
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
