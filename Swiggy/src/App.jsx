import { useState, useEffect } from "react";

import "./App.css";
import userInfo from "./Data/userInfo.json";
import offers from "./Data/offers.json";

import { Navbar } from "./components/Navbar";
import { Offers } from "./components/Offers";
import { Restaurants } from "./components/Restaurants";
import { Filters } from "./components/Filters";

const filters = {
  1: "Cost High to Low",
  2: "Cost Low to High",
  3: "Ratings",
  4: "Delivery",
  5: "Relevance",
};

function App() {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("");


  const updateFilter = (newFilter) => {
    // console.log(newFilter);
    switch (newFilter) {
      case "1": {
        setFilterBy(1);
        data.sort((a, b) => b.costForOne - a.costForOne);
        setData([...data]);
        console.log(data);
        break;
      }
      case "2": {
        setFilterBy(2);
        data.sort((a, b) => a.costForOne - b.costForOne);
        console.log(data.sort((a, b) => a.costForOne - b.costForOne));
        setData([...data]);
        // console.log(data);
        break;
      }
      case "3": {
        setFilterBy(3);
        data.sort((a, b) => b.rating - a.rating);
        setData([...data]);
        // console.log(data);
        break;
      }
      case "4": {
        setFilterBy(4);
        data.sort((a, b) => (a.deliveryTime > b.deliveryTime ? 1 : -1));
        setData([...data]);
        // console.log(data);
        break;
      }
      case "5": {
        setFilterBy(5);
        data
          .sort((a, b) => {
            return a.costForOne - b.costForOne;
          })
          .sort((a, b) => {
            return a.rating < b.rating ? 1 : -1;
          });

        // .sort((a, b) => a.costForOne - b.costForOne);

        setData([...data]);

        break;
      }
      default: {
        setData(data);
        break;
      }
    }
  };

  useEffect(() => {
    async function getRestaurantData() {
      const response = await fetch(
        `https://restaurants-app-01.herokuapp.com/Restaurant`
      );
      const Data = await response.json();
      setData(Data);
    }
    getRestaurantData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar {...userInfo} />
        <Offers offers={offers} />
        <section className="near-you">
          <Filters
            activeTab={filterBy}
            filters={filters}
            data={data}
            updateFilter={updateFilter}
          />
          <Restaurants data={data} />
        </section>
      </header>
    </div>
  );
}

export default App;
