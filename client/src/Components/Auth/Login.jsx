import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../Context/Alert/AlertContext";
import AuthContext from "../Context/Auth/AuthContext";
import Alerts from "../Layouts/LoginAlerts";
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Context from "../Context/Context/Context";

const Signin = () => {
  const { setLoginAlert, clearRegisterLoginAlerts } = useContext(AlertContext);
  const { login, error, clearErrors } = useContext(AuthContext);

  useEffect(() => {
    if (error) setLoginAlert("error", error);
    clearErrors();
    // eslint-disable-next-line
  }, [error]);

  const [getUser, setUser] = useState({ email: "", password: "" });
  const { email, password } = getUser;

  const [showPassword, setshowPassword] = useState(false);
  const [emailCheckerColor, setEmailCheckerColor] = useState("#ee0979");
  const [pwdCheckerColor, setPwdCheckerColor] = useState("#ee0979");

  // Theme and Styling
  const useStyles = makeStyles(theme => ({
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
    }
  }));

  //Email Validation
  const onEmailChange = e => {
    // TODO: Email Validator
    setUser({ ...getUser, email: e.target.value });
  };

  //Password Validation
  const onPasswordChange = e => {
    setUser({ ...getUser, password: e.target.value });
  };

  //PAssword Icon Handler
  const handleClickShowPassword = () => setshowPassword(!showPassword);

  //Submit
  const loginSubmited = e => {
    e.preventDefault();
    clearRegisterLoginAlerts();
    if (password && email) {
      // Login
      login(getUser);
    } else {
      // Alert
      setLoginAlert("error", "Please fill in all required fields");
    }
  };

  return (
    <form autoComplete="off" onSubmit={loginSubmited}>
      <AccountCircleIcon className="addAccountCircleIcon" />
      <Alerts />
      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="email">
          Email
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input id="email" onChange={onEmailChange} />
      </FormControl>
      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="password">
          Password
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          onChange={onPasswordChange}
          autoComplete="on"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? (
                  <Visibility className="pwdIcon" />
                ) : (
                  <VisibilityOff className="pwdIcon" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button type="submit" variant="contained" className="loginFormBtn">
        <PersonIcon className="btnIcon" />
        <span className="btnText">Login</span>
      </Button>
      <Typography variant="caption" className="signinMessage">
        <span className="requiredMsg">*</span> Indicates Required Fields.
      </Typography>
      <Typography variant="caption" className="signinMessage">
        Forgot your password? Click Here
      </Typography>
    </form>
  );
};

export default Signin;
