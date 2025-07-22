import "./App.css";
import Card from "./Component/card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card cardHeader="First card" mainHeading="Ace Card" />
      <Card cardHeader="Second card" mainHeading="King Card" />
      <Card cardHeader="Third card" />{" "}
      {/*Default value for mainHeading will be pass in third card*/}
    </>
  );
}

export default App;
