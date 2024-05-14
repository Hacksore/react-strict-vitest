import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((c) => c + 1);
  }, []);

  return <h2>{count}</h2>;
}

export default App;
