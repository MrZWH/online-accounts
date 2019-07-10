import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab.js";
import { LIST_VIEW, CHART_VIEW } from "./utility";

const items = [
  {
    id: 1,
    title: "dasdasdad",
    price: 200,
    date: "2018-09-10",
    category: {
      id: "1",
      name: "asdada",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 2,
    title: "dasdasdad",
    price: 200,
    date: "2018-09-10",
    category: {
      id: "1",
      name: "asdada",
      iconName: "ios-plane",
      type: "outcome"
    }
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <PriceList
        onModifyItem={item => {
          alert(item.id);
        }}
        onDeleteItem={item => {
          alert(item.id);
        }}
        items={items}
      /> */}
      <ViewTab
        activeTab={LIST_VIEW}
        onTabChange={view => {
          console.log(view);
        }}
      />
    </div>
  );
}

export default App;
