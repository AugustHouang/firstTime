import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main';
function App() {
    return (
        <div className='App'>
            <Navigation />
            <Main />
            <Footer />
        </div>
    )
}
export default App;