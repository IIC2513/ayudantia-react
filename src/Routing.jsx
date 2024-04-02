import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './App.jsx';
import Home from './Home.jsx';

function Routing(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Landing/>}/>
                    <Route path={"/Home"} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;