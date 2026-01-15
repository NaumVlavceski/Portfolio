import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Official from "./components/Official.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Official/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
