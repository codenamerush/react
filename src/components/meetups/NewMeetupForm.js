import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = urlInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        description: enteredDescription,
        address: enteredAddress
    }

    console.log(meetupData)
    props.onAddMeetup(meetupData);
  }

  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={urlInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" required id="address" ref={addressInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Meetup Description</label>
            <textarea required rows="5" id="description" ref={descriptionInputRef}/>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetupForm;
