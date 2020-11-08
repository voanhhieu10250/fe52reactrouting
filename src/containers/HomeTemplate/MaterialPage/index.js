import React from "react";
import Button from "@material-ui/core/Button";
import useStyle from "../../../style";

export default function MaterialPage() {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <h3>MaterialPage</h3>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <span>this is material</span>
    </div>
  );
}
