import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import People from "./views/People";
import Planets from './views/Planets';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path ="/"> 
          </Route>
          <Route exact path='/people/:num'>
            <People />
          </Route>
          <Route exact path='/planets/:num'>
            <Planets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
