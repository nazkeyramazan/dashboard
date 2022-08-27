import './App.css';
import Table from "./components/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {setDashboardData} from "./app/reducers/data";
import {useEffect} from "react";



function App() {
  const rows = useSelector((state) => state.data.dashboard)
  const dispatch = useDispatch()

  return (
    <div>
      <header className="header" >header</header>
      <div className="App">
        <Table rows={rows.slice(0, 37)} />
        <Table rows={rows.slice(37, 74)} />
        <Table rows={rows.slice(74, rows.length)} />
      </div>
    </div>
  );
}

export default App;
