import { useEffect, useState } from "react";
import "./App.css";
import WelcomePage from "./Pages/welcome/WelcomePage";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <>
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
      </>
      <WelcomePage />
    </>
  );
}

export default App;
