import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body.jsx";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
    </Routes>
    </BrowserRouter>
  );
}
