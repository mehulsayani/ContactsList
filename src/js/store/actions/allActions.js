import {
  SETCONTACTSLIST,
  CREATECONTACT
} from '../actionTypes';

// GET Requests
export const getContacts = () => (dispatch) => {
  let contactList = [{
    firstName: "John",
    lastName: "Doe",
    gender: "MALE",
    address: "Sample address",
    email: "abc@xyz.com",
    phoneNumber: "+1234567890",
    notes: "Sample Notes"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    gender: "FEMALE",
    address: "Sample big address Sample big address Sample big address Sample big address Sample big address",
    email: "abc1@xyz.com",
    phoneNumber: "+1234567890",
    notes: "A verrrrrrrryyyyyyyyyyy longgggggggggggg note"
  }]
  dispatch({
    type: SETCONTACTSLIST,
    data: contactList
  });
}

// POST Requests
export const addContact = (obj) => (dispatch) => {
  dispatch({
    type: CREATECONTACT,
    data: obj
  });
}