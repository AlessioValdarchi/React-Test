import { useEffect, useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home() {
  const [data, setData] = useState("");
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);
  async function getData() {
    const response = await fetch('http://numbersapi.com/random/math');
    const testo = await response.text();
    setData(testo);
  }

  useEffect(() => {
    getData();
  }, [odd, even]);

  function handleData() {
    const mytext = data.split(" ");
    if (mytext[0] % 2) {
      setEven((prev) => [...prev, data]);
    } else setOdd((prev) => [...prev, data]);
  }

  return (
    <div>
      {data && <h1>{data}</h1>}
      <button onClick={handleData}>Fetch and split</button>
      <Odd data={odd} />
      <Even data={even} />
    </div>
  );
}


