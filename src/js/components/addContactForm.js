import React, {Component} from 'react';
import {TextField, Checkbox, Grid, Button, MenuItem, FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const GENDER = [
  "MALE",
  "FEMALE",
  "OTHER"
];

export default class AddContactForm extends Component {

  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: GENDER[0],
      address: "",
      email: "",
      phoneNumber: "",
      notes: "",
      termsAndConditions: false
    }
  }

  fieldUpdateHandler = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  validatePhoneNumber = (phoneNumber) => {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneNumber.match(phoneno))
      return true;
    alert("Phone number format incorrect");
    return false;
  }

  addContactForm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let obj = Object.assign({}, this.state);
    if(this.validatePhoneNumber(this.state.phoneNumber)) {
      this.setState({
        firstName: "",
        lastName: "",
        gender: GENDER[0],
        address: "",
        email: "",
        phoneNumber: "",
        notes: "",
        termsAndConditions: false
      }, () => {
        this.props.addContact(obj);
      });
    }
  }

  render() {
    let {firstName, lastName, gender, email, phoneNumber, address, notes, termsAndConditions} = this.state;
    return(
      <form style={{ display: 'flex', flexWrap: 'wrap'}} onSubmit={this.addContactForm}>
        <TextField
          fullWidth
          label="First Name"
          required
          margin="normal"
          variant="outlined"
          inputProps={{maxLength:"25"}}
          name="firstName"
          value={firstName}
          onChange={this.fieldUpdateHandler}
          type="text" 
        />
        <TextField
          fullWidth
          label="Last Name"
          required
          margin="normal"
          variant="outlined"
          type="text" 
          name="lastName"
          value={lastName}
          onChange={this.fieldUpdateHandler}
          inputProps={{maxLength:"25"}}
        />
        <TextField
          fullWidth
          select
          required
          label="Select Gender"
          name="gender"
          onChange={this.fieldUpdateHandler}
          margin="normal"
          variant="outlined"
          value = {gender}
        >
          <MenuItem value="">
            Select an option
          </MenuItem>
          {GENDER.map(option => (
          <MenuItem key={option} value={option} selected={option === gender}>
            {option}
          </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          required
          margin="normal"
          variant="outlined"
          value={email}
          onChange={this.fieldUpdateHandler}
        />
        <TextField
          label="Phone Number"
          fullWidth
          type="tel"
          inputProps={{maxLength:"13"}}
          required
          margin="normal"
          variant="outlined"
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.fieldUpdateHandler}
        />
        <TextField
          fullWidth
          label="Address"
          name="address"
          type="text"
          required
          margin="normal"
          variant="outlined"
          value={address}
          inputProps={{maxLength:"100"}}
          onChange={this.fieldUpdateHandler}
        />
        <TextField
          label="Notes"
          fullWidth
          multiline={true}
          margin="normal"
          variant="outlined"
          name="notes"
          value={notes}
          onChange={this.fieldUpdateHandler}
          inputProps={{rows:"4", maxLength:"200"}}
        />
        <Grid item xs={12}> 
          <FormControlLabel
            control={
              <Checkbox value={true} required name="termsAndConditions"/>
            }
            label="Pleaser accept the terms and conditions"
          />
        </Grid>
        <Button type="submit" variant="contained" color="primary"> Submit </Button>
      </form>
    )
    
  }
}