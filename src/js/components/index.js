import React, {Component} from "react";
import {Container, Grid, CssBaseline} from '@material-ui/core';
import Header from './header'
import ContactTable from './contactsTable'
import AddContactForm from './addContactForm'

class IndexComponent extends Component{
    constructor(props){
        super(props);
    }
    
  render(){
    let {getContacts, addContact, contact} = this.props;
    return(
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Header/>
          <Grid container>
            <Grid item xs={12}> 
              <h3 style={{textAlign: "center"}}>Contacts Table</h3>
            </Grid>
            <Grid item xs={12}> 
              <ContactTable getContacts={getContacts} contactList={contact.list}/>
            </Grid>
            <Grid item xs={12}> 
              <h3 style={{textAlign: "center"}}>Add a contact</h3>
            </Grid>
            <Grid item xs={12}> 
              <AddContactForm addContact={addContact} />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default IndexComponent;