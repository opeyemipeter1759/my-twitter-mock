import "./App.css";
import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
