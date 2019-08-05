import { connect } from 'react-redux'
import Index from '../components';
import { getContacts, addContact} from '../store/actions/allActions';

const mapStateToProps = (state, ownProps) => ({
  contact: state.contact,
});

const mapDispatchToProps = {
  getContacts, addContact
}

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

export default ContactsContainer;
