import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch(
      "https://react-tutorial-634da-default-rtdb.firebaseio.com/meetups.json"
    ).then((result) => {
      return  result.json();
    }).then(response => {
      setIsLoading(false);
      setLoadedMeetups([response["-N9GhlQ_cPTFTC1NNqGN"]])
    });
  }, []);

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
