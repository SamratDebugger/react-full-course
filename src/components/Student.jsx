export default function Student(props) {
  return (
    <>
      <ul>
        <li>name:{props.item["name"]}</li>
        <li>age:{props.item["age"]}</li>
        <li>city:{props.item["city"]}</li>
      </ul>
    </>
  );
}
