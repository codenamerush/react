import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "First",
    image:
      "https://via.placeholder.com/150",
    address: "dummy",
    description: "text",
  },
  {
    id: "2",
    title: "Second",
    image:
      "https://via.placeholder.com/150",
    address: "dummy",
    description: "text",
  },
  {
    id: "3",
    title: "Third",
    image:
      "https://via.placeholder.com/150",
    address: "dummy",
    description: "text",
  },
  {
    id: "4",
    title: "Fourth",
    image:
      "https://via.placeholder.com/150",
    address: "dummy",
    description: "text",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />;
    </section>
  );
}

export default AllMeetupsPage;
