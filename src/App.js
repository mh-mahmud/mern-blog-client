import './App.css';
import Post from './Post';
import Header from './Header';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path={'login'} element={<LoginPage />}/>
        <Route path={'register'} element={<RegistrationPage />} />
      </Route>

    </Routes>
  );
}

export default App;
