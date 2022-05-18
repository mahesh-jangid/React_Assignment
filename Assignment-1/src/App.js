import "./App.css";
import Mobiles from "./components/MobileOS";

// ***************** 1st Way **********************

function App() {
  const oper_system_arr = ["Android", "Blackberry", "IPhone", "Window Phone"];
  const Mobile_manufact_arr = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <header className="App-header">
        <Mobiles heading="Mobile Operating System" items={oper_system_arr} />
        <Mobiles heading="Mobile Manufactures" items={Mobile_manufact_arr} />
      </header>
    </div>
  );
}

// ***************** 2nd Way **********************

// function App() {
//   let Data = [
//     {
//       heading: "Mobile Operating System",
//       items: ["Android", "Blackberry", "IPhone", "Window Phone"],
//     },
//     {
//       heading: "Mobile Manufactures",
//       items: ["Samsung", "HTC", "Micromax", "Apple"],
//     },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Mobiles Data={Data} />
//       </header>
//     </div>
//   );
// }

export default App;
