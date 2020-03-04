import React from "react";
import Button from "@material-ui/core/Button";

export const DButton = () => <Button variant="contained">Default</Button>;
export const PButton = () => <Button variant="contained">Primary</Button>;
export const SButton = () => (
  <Button vasriant="contained" color="secondary">
    Secondary
  </Button>
);
