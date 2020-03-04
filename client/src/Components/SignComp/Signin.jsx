import React, { useState, useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/PersonSharp";
import Alert from "@material-ui/lab/Alert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Context from "../Context/Context/Context";

const Signin = () => {
  const myContext = useContext(Context);

  const [getPassword, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [getEmail, setEmail] = useState("");
  const [getAlert, setAlert] = useState({ message: "", type: "" });
  const [emailCheckerColor, setEmailCheckerColor] = useState("#ee0979");
  const [pwdCheckerColor, setPwdCheckerColor] = useState("#ee0979");
  const [errColor, setErrColor] = useState("red");

  // Theme and Styling
  const useStyles = makeStyles(theme => ({
    AccountCircleIcon: {
      width: "100%",
      fontSize: "5rem",
      color: "#e35d5b",
      marginBottom: "10px"
    },
    alert: { marginBottom: "10px", display: "block-inline" },
    emailInput: {
      //Change label color
      "& label": {
        color: "#6b6b6b !important"
      },
      //Change input label color when we focus the input
      "& label.Mui-focused": {
        color: "#9c9c9c !important"
      },
      //Input Text
      "& .MuiInputBase-root": {
        color: "#6b6b6b"
      },
      // Change botBorer color
      "& .MuiInput-underline:before": {
        borderBottomColor: "#6b6b6b"
      },
      // Change botBorer color when Hover
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#ff6a00"
      },
      // Change botBorer color when Typing
      "& .MuiInput-underline:after": {
        borderBottomColor: emailCheckerColor
      }
    },
    passwordInput: {
      //Change label color
      "& label": {
        color: "#6b6b6b !important"
      },
      //Change input label color when we focus the input
      "& label.Mui-focused": {
        color: "#9c9c9c !important"
      },
      //Input Text
      "& .MuiInputBase-root": {
        color: "#6b6b6b"
      },
      // Change botBorer color
      "& .MuiInput-underline:before": {
        borderBottomColor: "#6b6b6b"
      },
      // Change botBorer color when Hover
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#ff6a00"
      },
      // Change botBorer color when Typing
      "& .MuiInput-underline:after": {
        borderBottomColor: pwdCheckerColor
      },
      marginTop: "10px"
    },
    required: { color: "red", marginLeft: "5px" },
    primaryBtn: {
      background: "linear-gradient(to right, #ee0979, #ff6a00)",
      width: "80%",
      color: "#eee",
      transition: "all .5s",
      msTransition: "all .5s",
      MozTransition: "all .5s",
      margin: "30px 0 15px 0",
      opacity: ".8",
      "&:hover": { opacity: "1", width: "85%", margin: "30px 0 15px 0" }
    },
    loginBtn: { marginRight: theme.spacing(2) },
    textBtn: {
      textShadow: "0px 0px 5px rgba(0,0,0,0.75)",
      fontSize: ".8rem",
      marginTop: "2px"
    },
    requiredMsg: { color: "red", fontSize: "1rem" },
    signinMessage: {
      color: "#6b6b6b",
      display: "block",
      textAlign: "left",
      fontSize: ".7rem"
    }
  }));

  const classes = useStyles();

  //Email Validation
  const onEmailChange = e => {
    if (e.target.value.includes("@gmail.com")) {
      setEmail(e.target.value);
      setEmailCheckerColor("#30cf7c");
    } else {
      setEmail("");
      setEmailCheckerColor(errColor);
    }
  };

  //Password Validation
  const onPasswordChange = e => {
    if (e.target.value.length > 5) {
      setPassword(e.target.value);
      setPwdCheckerColor("#30cf7c");
    } else {
      setPassword("");
      setPwdCheckerColor(errColor);
    }
  };

  //PAssword Icon Handler
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  //Submit
  const loginSubmited = e => {
    console.log("Email: ", getEmail);
    console.log("Pass: ", getPassword);
    e.preventDefault();
    if (getPassword && getEmail) {
      setAlert({ message: "Loged in ...", type: "success" });
    } else {
      setAlert({
        message: "Please fill in all the required fields.",
        type: "error"
      });
    }
  };

  const checkAlert = () => {
    if (getAlert.message.length > 0) {
      return (
        <Alert
          severity={(getAlert.message, getAlert.type)}
          className={classes.alert}
        >
          {getAlert.message}
        </Alert>
      );
    }
  };

  return (
    <form autoComplete="off" onSubmit={loginSubmited}>
      <AccountCircleIcon className={classes.AccountCircleIcon} />
      {checkAlert()}
      <FormControl className={classes.emailInput} fullWidth>
        <InputLabel htmlFor="email">
          Email
          <span className={classes.required}>*</span>
        </InputLabel>
        <Input
          id="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={onEmailChange}
        />
      </FormControl>
      <FormControl className={classes.passwordInput} fullWidth>
        <InputLabel htmlFor="password">
          Password
          <span className={classes.required}>*</span>
        </InputLabel>
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={onPasswordChange}
          autoComplete="on"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" variant="contained" className={classes.primaryBtn}>
        <PersonIcon className={classes.loginBtn} />
        <span className={classes.textBtn}>Login</span>
      </Button>
      <Typography variant="caption" className={classes.signinMessage}>
        <span className={classes.requiredMsg}>*</span> Indicates Required
        Fields.
      </Typography>
      <Typography variant="caption" className={classes.signinMessage}>
        Forgot your password? Click Here
      </Typography>
    </form>
  );
};

export default Signin;
