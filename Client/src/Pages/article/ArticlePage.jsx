import { useState, useEffect } from "react";
import ArticleBar from "./comps/ArticleBar";
import axios from "axios";

export default function ArticlePage() {
  const apiKey = import.meta.env.VITE_REACT_APP_x_rapidapi_key;

  const [searchedElement, setSearchedElement] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [elementsList, setElementsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://swapi.dev/api/";

    if (isLoading) {
      try {
        const response = await axios.get(url);
        console.log("response data: ", response.data);

        setElementsList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false); // Set isLoading to false after the request is completed
    }
  };

  return (
    <div>
      <ArticleBar />
    </div>
  );
}
