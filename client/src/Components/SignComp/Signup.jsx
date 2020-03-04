import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Signup = () => {
  const [getFName, setFName] = useState(null);
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [password, showPassword] = useState(false);
  const [getEmailInputColor, setEmailInputColor] = useState("#ee0979");
  const [getPwdInputColor, setPwdInputColor] = useState("#ee0979");
  const [getAlert, setAlert] = useState({ message: "", type: "" });

  const useStyles = makeStyles(theme => ({
    addAccountCircleIcon: {
      width: "100%",
      fontSize: "5rem",
      color: "#e35d5b",
      marginBottom: "10px"
    },
    alert: { marginBottom: "10px", display: "block-inline" },
    required: { color: "red", marginLeft: "5px" },
    userInput: {
      "& label": {
        color: "#6b6b6b !important"
      },
      "& label.Mui-focused": {
        color: "#9c9c9c !important"
      },
      "& .MuiInputBase-root": {
        color: "#6b6b6b"
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#6b6b6b"
      },
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#ff6a00"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ee0979"
      },
      marginBottom: "10px"
    },
    emailInput: {
      "& label": {
        color: "#6b6b6b !important"
      },
      "& label.Mui-focused": {
        color: "#9c9c9c !important"
      },
      "& .MuiInputBase-root": {
        color: "#6b6b6b"
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#6b6b6b"
      },
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#ff6a00"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getEmailInputColor
      },
      marginBottom: "10px"
    },
    passwordInput: {
      "& label": {
        color: "#6b6b6b !important"
      },
      "& label.Mui-focused": {
        color: "#9c9c9c !important"
      },
      "& .MuiInputBase-root": {
        color: "#6b6b6b"
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#6b6b6b"
      },
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#ff6a00"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getPwdInputColor
      },
      marginBottom: "10px"
    },
    signupBtn: {
      background: "linear-gradient(to right, #ee0979, #ff6a00)",
      width: "80%",
      color: "#eee",
      margin: "20px 0 15px 0",
      transition: "all .5s",
      msTransition: "all .5s",
      MozTransition: "all .5s",
      opacity: ".8",
      "&:hover": { opacity: "1", margin: "20px 0 15px 0", width: "85%" }
    },
    signupIcon: { marginRight: theme.spacing(2) },
    requiredMsg: { color: "red", fontSize: "1rem" },
    signupMessage: {
      color: "#6b6b6b",
      display: "block",
      textAlign: "left",
      fontSize: ".7rem"
    }
  }));

  const fnameChanged = e => {
    setFName(e.target.value);
  };

  const emailChanged = e => {
    if (e.target.value.includes("@gmail.com")) {
      setEmail(e.target.value);
      setEmailInputColor("#30cf7c");
    } else {
      setEmail(null);
      setEmailInputColor("red");
    }
  };

  const passwordChanged = e => {
    if (e.target.value.length > 5) {
      setPassword(e.target.value);
      setPwdInputColor("#30cf7c");
    } else {
      setPassword("");
      setPwdInputColor("red");
    }
  };

  const handleClickShowPassword = () => {
    showPassword(!password);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (getEmail && getEmail && getPassword) {
      setAlert({ message: "Account Created", type: "success" });
    } else {
      setAlert({
        message: "Please fill in all the required fields.",
        type: "error"
      });
    }
  };

  const showAlert = () => {
    if (getAlert.message) {
      return (
        <Alert severity={getAlert.type} className={classes.alert}>
          {getAlert.message}
        </Alert>
      );
    }
  };
  const classes = useStyles();

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <AccountCircleIcon className={classes.addAccountCircleIcon} />
      {showAlert()}
      {/* UserName input */}
      <FormControl className={classes.userInput} fullWidth>
        <InputLabel htmlFor="fullname">
          Full Name
          <span className={classes.required}>*</span>
        </InputLabel>
        <Input
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Full Name"
          onChange={fnameChanged}
        />
      </FormControl>

      {/* Email input */}
      <FormControl className={classes.emailInput} fullWidth>
        <InputLabel htmlFor="email">
          Email
          <span className={classes.required}>*</span>
        </InputLabel>
        <Input
          id="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={emailChanged}
        />
      </FormControl>

      {/* Password input */}
      <FormControl className={classes.passwordInput} fullWidth>
        <InputLabel htmlFor="password">
          Password
          <span className={classes.required}>*</span>
        </InputLabel>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
          onChange={passwordChanged}
          type={password ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {password ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button type="submit" variant="contained" className={classes.signupBtn}>
        <PersonAddIcon className={classes.signupIcon} />
        <span className={classes.textBtn}>Sign up</span>
      </Button>
      <Typography variant="caption" className={classes.signupMessage}>
        <span className={classes.requiredMsg}>*</span> Indicates Required
        Fields.
      </Typography>
      <Typography variant="caption" className={classes.signupMessage}>
        By clicking on Sign up, you agree to our Terms and Conditions.
      </Typography>
    </form>
  );
};

export default Signup;
