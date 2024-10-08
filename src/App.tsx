import {BrowserRouter, useRoutes} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import AllPosts from "./pages/AllPosts.tsx";
import Header from "./pages/GlobalHeader.tsx";


const AppRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/post', element: <Post/>},
        {path: '/posts', element: <AllPosts/>}

    ]);
}
const App = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4">
                <BrowserRouter>
                    <Header/>
                    <AppRoutes/>
                </BrowserRouter>
            </div>
        </div>
    )
};

export default App;
