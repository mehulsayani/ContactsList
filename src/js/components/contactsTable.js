import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper} from '@material-ui/core';

export default class ContactsTable extends Component {

  constructor(){
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    let {contactList} = this.props;
    if(contactList) {
      return (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactList.map(row => (
                <TableRow key={row.email}>
                  <TableCell title={row.firstName +" " +row.lastName} className="column" component="th" scope="row">{row.firstName} {row.lastName}</TableCell>
                  <TableCell title={row.gender} className="column" >{row.gender}</TableCell>
                  <TableCell title={row.email} className="column" >{row.email}</TableCell>
                  <TableCell title={row.phoneNumber} className="column" >{row.phoneNumber}</TableCell>
                  <TableCell title={row.address}className="column" >{row.address}</TableCell>
                  <TableCell title={row.notes} className="column" >{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return "Loading...";
    }
    
  }
}