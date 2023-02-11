import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
//import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import Film from './components/Films/Film'
import data from './components/Detail/Detail'
import Detail from './components/Detail/Detail';
function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Film />}></Route>
                <Route path='/Detail/:id' element={<Detail />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}
export default App;