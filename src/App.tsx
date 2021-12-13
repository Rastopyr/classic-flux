import "./styles.css";
import { List } from "./UserList/Components/UserList";

import "bootstrap/dist/css/bootstrap.min.css";
import { AddUserForm } from "./UserList/Components/AddUserForm";

export default function App() {
  return (
    <div className="App">
      <h1>Classic flux</h1>

      <div className="container">
        <div className="row">
          <div className="col col-6 py-3 d-flex">
            <AddUserForm />
          </div>
        </div>

        <div className="row">
          <List />
        </div>
      </div>
    </div>
  );
}
