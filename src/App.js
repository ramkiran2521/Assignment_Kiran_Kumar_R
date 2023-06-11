import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import All from "./component/Tabs/all";
import Blocked from "./component/Tabs/Blocked";
import Your from "./component/Tabs/Your";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/your/:id" element={<Your />} />
        <Route path="/blocked" element={<Blocked />} />
      </Routes>
    </>
  );
}

export default App;
