export default function App() {
  const heros = ["Superman", "Batman", "Iron man", "Spider man"];
  return (
    <>
      <ul>
        {heros.map((item, i) => {
          return <li key={i.toString}>{item}</li>;
        })}
      </ul>
    </>
  );
}
