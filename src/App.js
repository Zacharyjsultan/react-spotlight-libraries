import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoeTable from './components/ShoeTable.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/Table">Table</Link>
        <Link to="/Charts">Charts</Link>
      </nav>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>This app is using the dark mode but i swear there is data in the table - no time for css...</main>
      </ThemeProvider>

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
