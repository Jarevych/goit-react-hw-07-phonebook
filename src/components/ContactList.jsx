import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/ContactSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter.filter)

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const filteredContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <div>
      <ul className="contact-list">
       
      {filteredContacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <p className="contact-name">Name: {contact.name}</p>
            <p className="contact-number">Number: {contact.number}</p>
            <button type="button" onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
