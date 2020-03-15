import React, { useState, Fragment } from "react";
import SwipeableViews from 'react-swipeable-views';
import Signin from "./Login";
import Signup from "./Register";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/PersonSharp";
import PersonAddIcon from "@material-ui/icons/PersonAddSharp";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`
  };
}

const TabsComp = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Tabs
        className="tabs"
        value={value}
        onChange={handleChange}
        aria-label=""
        centered
      >
        <Tab label="LOGIN" icon={<PersonIcon />} {...a11yProps(0)} />
        <Tab label="REGISTER" icon={<PersonAddIcon />} {...a11yProps(1)} />
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChange}
      >
      <TabPanel value={value} index={0} dir={'x'}>
        <Signin />
      </TabPanel>
      <TabPanel value={value} index={1} dir={'x'}>
        <Signup />
      </TabPanel>
      </SwipeableViews>
    </Fragment>
  );
};

export default TabsComp;
