import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import {Price} from "./Pages/Price/Price";
export default function App() {
  return (
    <div>
      <h1>Custom Link Example</h1>

      <p>
      
      </p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="price" element={<Price />} />
          <Route path="contato" element={<Contato/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
function Contato() {
return(
  <div>
  <h1>Sobre</h1>
</div>)
}
