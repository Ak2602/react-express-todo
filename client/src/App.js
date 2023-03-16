import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataList from "./components/addData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<DataList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
