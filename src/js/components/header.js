import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const HeaderComponent = () => {
  return(
      <React.Fragment>
        <AppBar position="static" color="default" style={{marginBottom: "15px"}}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              This is a demo Contacts App!
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
  );
}

export default HeaderComponent;