import css from './Contact.module.css'
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from 'react-redux';


export default function Contact({ contact }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(deleteContact(contact.id));
  }
  return (
    <div className={css.box}>
      <div>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <button onClick={handleClick} className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}