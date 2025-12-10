const loginSatusButton = (status) => {
  if (status) {
    return <button>logout</button>;
  } else {
    return <button>login </button>;
  }
};

export default function App() {
  return (
    <div>
      <h1>login Status</h1>
      {loginSatusButton(false)}
    </div>
  );
}
