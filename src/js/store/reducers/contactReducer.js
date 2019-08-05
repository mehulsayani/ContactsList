import {SETCONTACTSLIST, CREATECONTACT} from '../actionTypes'
import {setData} from '../storeUtils';

const contactReducer = (state = {}, action) => {
    switch(action.type) {
      case SETCONTACTSLIST : return setData(state, 'list', action.data);
      case CREATECONTACT : return addContact(state, action.data);
      default : return state;
    }
}

const addContact = (state, contact) => {
  let stateCopy = Object.assign({}, state);
  if(Array.isArray(stateCopy.list)) {
    stateCopy.list.push(contact)
  } else {
    stateCopy.list = [contact];
  }
  return stateCopy;
}
export default contactReducer;