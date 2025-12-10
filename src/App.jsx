export default function App() {
  const status = true;
  switch (status) {
    case true:
      return <button>logout</button>;
    case false:
      return <button>login</button>;
    default:
      return null;
  }
}
