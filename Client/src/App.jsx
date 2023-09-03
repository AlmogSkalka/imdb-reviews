import { useEffect, useState } from "react";
import "./App.css";
import WelcomePage from "./Pages/welcome/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlePage from "./Pages/article/ArticlePage";

function App() {
  const [backendData, setBackendData] = useState([]);

  //calling to server
  // useEffect(() => {
  //   fetch("http://localhost:3001/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<WelcomePage />} />
          <Route path="/articles" exact element={<ArticlePage />} />
        </Routes>
      </Router>
      {/* REDNERING SERVER DATA<>
        {typeof backendData.users === "undefined" ? (
          <p>loading...</p>
        ) : (
          <ul>
            {" "}
            {backendData.users.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        )}
      </> */}
    </>
  );
}

export default App;
