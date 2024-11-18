import React from "react";
import createRoutes from "./routes";

const App: React.FC = () => {
  const routes = createRoutes();
  return <div className="App">{routes}</div>;
};

export default App;
