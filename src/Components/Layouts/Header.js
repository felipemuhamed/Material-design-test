import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";
import CreateDialog from "../Exercises/Create";

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        App
      </Typography>
      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
