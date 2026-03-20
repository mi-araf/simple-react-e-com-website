import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './Components/Navbar'

function App() {
	return (
		<div className='app'>
			<Navbar></Navbar>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='*' element={ <h1 style={{textAlign: 'center', margin: "200px", fontSize: "4rem"}}>404 page not found</h1> } />
			</Routes>
		</div>
	)
}

export default App
