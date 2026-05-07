import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   console.log("Runs after every render");
  // });

  useEffect(() => {
    console.log("Runs every time count changes", count);
  }, [count]);

  // useEffect(() => {
  //   console.log("Runs only once");
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
      <button onClick={() => setCounter(counter + 1)}>INCREASE COUNTER</button>

      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
    </div>
  );
}
