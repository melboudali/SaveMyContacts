import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertContext from "../Context/Alert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { registerAlert } = alertContext;
  return (
    registerAlert.length > 0 &&
    registerAlert.map(alert => (
      <Alert severity={alert.type} variant="filled" id="alert" key={alert.id}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
