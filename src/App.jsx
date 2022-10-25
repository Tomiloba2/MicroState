import {Routes,Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/GeneralComponent/Footer';
import Error from './pages/Error';

const App = () => {
    return ( 
        <div className="App">
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/search' element={<Search/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/blogs' element={<Blogs/>} />
                        <Route path='*' element={<Error/>} />
                    </Route>
                </Routes>
            <Footer/>
        </div>
     );
}
 
export default App;