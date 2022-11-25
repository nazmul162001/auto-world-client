import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import AllRoutes from "./routes/AllRoutes";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <h2>Loading....</h2> : <Layout />}</>;
}

export default App;
