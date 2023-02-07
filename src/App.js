import styles from "./App.module.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
