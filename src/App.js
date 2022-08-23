import './App.css';
import Table from "./components/Table/Table";
const rows = [
    {parentID:1, filiale: 'Алматинский',cbo: 'Центр', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:18, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:1, filiale: 'Алматинский',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:15, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:22, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:2, filiale: 'Столичный',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:3, filiale: 'Акмолинсикй',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:3, filiale: 'Акмолинсикй',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:3, filiale: 'Акмолинсикй',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
    {parentID:3, filiale: 'Акмолинсикй',cbo: '№ 256', served:6, serviceAvgTime:24, waitAvgTime:4, queueCnt: 0},
];

function App() {
  return (
    <div className="App">
        <Table rows={rows}/>
        <Table rows={rows}/>
        <Table rows={rows}/>
    </div>
  );
}

export default App;
