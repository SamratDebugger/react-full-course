export default function App() {
  const status = false;
  switch (status) {
    case true:
      return <button>logout</button>;
    case false:
      return <button>login</button>;
      return null;
  }
}
