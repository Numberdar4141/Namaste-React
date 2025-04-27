import { useEffect, useState } from "react";

export const useSearch = () => {
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async () => {
    try {
      const data = await fetch(SEARCH_URL + input);
      const res = await data.json();
      setResult(res.data?.suggestions);
      setSearchText(res.data?.query);
      console.log("res", res.data?.suggestions);
    } catch (err) {
      console.log(err);
    }
  };
  return result;
};
