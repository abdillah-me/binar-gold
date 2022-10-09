import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import CariMobil from "./pages/CariMobil/CariMobil";
import HasilCari from "./pages/HasilCari/HasilCari";

function App() {
   return (
      <Router>
         <div className="App">
            <div class="content">
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/cari-mobil">
                     <CariMobil />
                  </Route>
                  <Route path="/hasil-mobil">
                     <HasilCari />
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
