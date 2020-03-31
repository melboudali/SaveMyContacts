import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../Context/Alert/AlertContext";
import AuthContext from "../Context/Auth/AuthContext";
import { makeStyles } from "@material-ui/core/styles";
import Alerts from "../Layouts/RegisterAlerts";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Signup = () => {
  const [getUser, setUser] = useState({
    fName: "",
    email: "",
    firstPassword: "",
    secPassword: ""
  });

  const { fName, email, firstPassword, secPassword } = getUser;
  const { register, error, clearErrors } = useContext(AuthContext);
  const { setRegisterAlert, clearRegisterLoginAlerts } = useContext(
    AlertContext
  );

  useEffect(() => {
    if (error === "User already exist!")
      setRegisterAlert("error", "User already exist!");
    clearErrors();
    // eslint-disable-next-line
  }, [error]);

  const [fPassword, showFPassword] = useState(false);
  const [sPassword, showSPassword] = useState(false);
  const [getUsernameColor, setUsernameColor] = useState("#c04441 !important");
  const [getEmailInputColor, setEmailInputColor] = useState(
    "#c04441 !important"
  );
  const [getFPwdInputColor, setFPwdInputColor] = useState("#c04441 !important");
  const [getSPwdInputColor, setSPwdInputColor] = useState("#c04441 !important");

  const useStyles = makeStyles(() => ({
    userInput: {
      "& .MuiInput-underline:hover::after": {
        borderBottomColor: getUsernameColor
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getUsernameColor
      }
    },
    emailInput: {
      "& .MuiInput-underline:hover::after": {
        borderBottomColor: getEmailInputColor
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getEmailInputColor
      }
    },
    passwordInput: {
      "& .MuiInput-underline:hover::after": {
        borderBottomColor: getFPwdInputColor
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getFPwdInputColor
      }
    },
    secPasswordInput: {
      "& .MuiInput-underline:hover::after": {
        borderBottomColor: getSPwdInputColor
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: getSPwdInputColor
      }
    }
  }));

  // fName Handler
  const fnameChanged = e => {
    const fName = e.target.value;
    setUser({ ...getUser, fName });
    fName && fName.length > 5
      ? setUsernameColor("#1bb76e !important")
      : setUsernameColor("#c04441 !important");
  };

  // Email Handler
  const emailChanged = e => {
    const email = e.target.value;
    setUser({ ...getUser, email });
    email.includes("@") && email.includes(".com")
      ? setEmailInputColor("#1bb76e !important")
      : setEmailInputColor("#c04441 !important");
  };

  // fPwd Handler
  const passwordChanged = e => {
    const firstPassword = e.target.value;
    setUser({ ...getUser, firstPassword });
    firstPassword.length > 5
      ? setFPwdInputColor("#1bb76e !important")
      : setFPwdInputColor("#c04441 !important");
  };

  // sPwd Handler
  const secPasswordChanged = e => {
    const secPassword = e.target.value;
    setUser({ ...getUser, secPassword });
    secPassword === firstPassword
      ? setSPwdInputColor("#1bb76e !important")
      : setSPwdInputColor("#c04441 !important");
  };

  // Pwd Icons Handler
  const handleClickShowPassword = () => showFPassword(!fPassword);
  const handleClickShowSecPassword = () => showSPassword(!sPassword);

  const onSubmit = e => {
    e.preventDefault();
    clearRegisterLoginAlerts();
    if (fName && email && firstPassword && secPassword) {
      firstPassword === secPassword
        ? register({ name: fName, email, password: firstPassword })
        : setRegisterAlert("error", "Password do not match");
    } else {
      setRegisterAlert("error", "Please fill in all required fields");
    }
  };

  const classes = useStyles();

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <AccountCircleIcon className="addAccountCircleIcon" />
      <Alerts />
      {/* Full Name input */}
      <FormControl className={`inputClass ${classes.userInput}`} fullWidth>
        <InputLabel htmlFor="fullname">
          Full Name
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input id="fullname" type="text" onChange={fnameChanged} />
      </FormControl>

      {/* Email input */}
      <FormControl className={`inputClass ${classes.emailInput}`} fullWidth>
        <InputLabel htmlFor="email">
          Email
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input id="email" onChange={emailChanged} />
      </FormControl>

      {/* FirPassword input */}
      <FormControl className={`inputClass ${classes.passwordInput}`} fullWidth>
        <InputLabel htmlFor="fPassword">
          Password
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input
          id="fPassword"
          autoComplete="on"
          onChange={passwordChanged}
          type={fPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {fPassword ? (
                  <Visibility className="pwdIcon" />
                ) : (
                  <VisibilityOff className="pwdIcon" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {/* SecPassword input */}
      <FormControl
        className={`inputClass ${classes.secPasswordInput}`}
        fullWidth
      >
        <InputLabel htmlFor="sPassword">
          Confirm Password
          <span className="requiredLabel">*</span>
        </InputLabel>
        <Input
          id="sPassword"
          autoComplete="on"
          onChange={secPasswordChanged}
          type={sPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowSecPassword}>
                {sPassword ? (
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
        <PersonAddIcon className="btnIcon" />
        <span className="btnText">Sign up</span>
      </Button>
      <Typography variant="caption" className="signinMessage">
        <span className="requiredMsg">*</span> Indicates Required Fields.
      </Typography>
      <Typography variant="caption" className="signinMessage">
        By clicking on Sign up, you agree to our
        <a href="/signin" className="fPwd">
          Terms and Conditions
        </a>
        .
      </Typography>
    </form>
  );
};

export default Signup;
