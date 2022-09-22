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
    if (mytext[0] % 2 === 0) {
      setEven((prev) => [...prev, data]);
    } else setOdd((prev) => [...prev, data]);
  }

  function onRemove(listName, elemIndex) {
    if (listName === 'ODD') {
      //setOdd
      setOdd(odd => odd.filter((textElem, index) => index !== elemIndex));
    } else if (listName === 'EVEN') {
      //setEven
      setEven(even => even.filter((textElem, index) => index !== elemIndex));
    }
  }
  return (
    <div>
      {data && <h1>{data}</h1>}
      <button onClick={handleData}>Fetch and split</button>
      <Odd title={'ODD'} data={odd} onRemove={onRemove} />
      <Even title={'EVEN'} data={even} onRemove={onRemove} />
    </div>
  );
}


