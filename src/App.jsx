import Student from "./components/Student";

export default function App() {
  const itemObj = {
    name: "Joy",
    age: 30,
    city: "Dhaka",
  };
  return (
    <>
      <Student item={itemObj} />
    </>
  );
}
