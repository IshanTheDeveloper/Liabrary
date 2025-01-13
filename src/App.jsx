import { useState } from "react";
import Navbar from "../components/Homepage/navbar";
import { Outlet } from "react-router-dom";
import userContext from "./useContext";
import { Provider } from "react-redux";
import bookStore from "./bookstore";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <Provider store={bookStore}>
      <userContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <Navbar />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
}

export default App;
