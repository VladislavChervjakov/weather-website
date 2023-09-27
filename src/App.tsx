import "./App.css";
import Header from "./components/header/header.component";
import rainBackground from "./assests/images/rainBackground.jpg";

const appStyle = {
  backgroundImage: `url("${rainBackground}")`,
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <Header />
    </div>
  );
}

export default App;
