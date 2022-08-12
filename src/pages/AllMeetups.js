import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "First",
    image:
      "data:image/jpeg;base64,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",
    address: "dummy",
    description: "text",
  },
  {
    id: "2",
    title: "Second",
    image:
      "data:image/jpeg;base64,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",
    address: "dummy",
    description: "text",
  },
  {
    id: "3",
    title: "Third",
    image:
      "data:image/jpeg;base64,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",
    address: "dummy",
    description: "text",
  },
  {
    id: "4",
    title: "Fourth",
    image:
      "data:image/jpeg;base64,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",
    address: "dummy",
    description: "text",
  },
];

function AllMeetupsPage() {
  fetch(
    "https://react-tutorial-634da-default-rtdb.firebaseio.com/meetups.json"
  ).then((result) => {
    return  result.json();
  }).then(response => {
    console.log("response? ", response)
  });

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />;
    </section>
  );
}

export default AllMeetupsPage;
