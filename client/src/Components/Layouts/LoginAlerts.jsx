import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertContext from "../Context/Alert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { loginAlert } = alertContext;
  return (
    loginAlert.length > 0 &&
    loginAlert.map(alert => (
      <Alert severity={alert.type} className="alert" key={alert.id}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
