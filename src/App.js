import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/authentication/Login/Login";
import PassReset from "./pages/authentication/PassReset/PassReset";
import Register from "./pages/authentication/Register/Register";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Spinner from "./shared/Spinner/Spinner";
function App() {
    return (
        <div className="relative selection:text-white selection:bg-red-700">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/resetpassword"
                    element={<PassReset></PassReset>}
                ></Route>
                <Route path="/spinner" element={<Spinner></Spinner>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
