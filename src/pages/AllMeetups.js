import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-tutorial-634da-default-rtdb.firebaseio.com/meetups.json"
    ).then((result) => {
      return  result.json();
    }).then(response => {
      setIsLoading(false);
      setLoadedMeetups(loadTheData(response))
    });
  }, []);

  function loadTheData(meetups) {
    const meets = [];
    for (const keys in meetups) {
      meetups[keys].id = keys;
      meets.push(meetups[keys]);
    }
    return meets;
  }

  if(isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    )
  } else {
    return (
  
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }

}

export default AllMeetupsPage;
