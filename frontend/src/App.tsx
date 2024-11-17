import "./App.css";
import createRoutes from "./routes";

function App() {
  const routes = createRoutes();
  return <div>{routes}</div>;
}

export default App;
