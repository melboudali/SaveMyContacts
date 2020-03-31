import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertContext from "../Context/Alert/AlertContext";

const Alerts = () => {
  const { loginAlert } = useContext(AlertContext);

  return (
    loginAlert.length > 0 &&
    loginAlert.map(alert => (
      <Alert severity={alert.type} variant="filled" id="alert" key={alert.id}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
