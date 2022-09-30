import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoeTable from './components/ShoeTable.js';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/Table">Table</Link>
        <Link to="/Charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/Table">
          <h1>Table Libary</h1>
          <ShoeTable></ShoeTable>
        </Route>
        <Route path="/Charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
