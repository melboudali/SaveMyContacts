import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertContext from "../Context/Alert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <Alert severity={alert.type} className="alert" key={alert.id}>
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
