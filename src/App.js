import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Credit from "./Credit";
function App() {
  return (
    <div>
      <Search defaultCity="Vancouver" />
      <Credit />
    </div>
  );
}

export default App;
