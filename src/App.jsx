import './App.scss';
import { About } from './pages/about/About';
import { Footer } from './pages/components/footer/Footer';
import { Header } from './pages/components/header/Header';
import { Hero } from './pages/hero/Hero';
import { Servicios } from './pages/products/Servicios';
import 'aos/dist/aos.css';
function App() {
	return (
		<div className='App'>
			<Header />
			<div>
				<Hero />
				<Servicios />
				<About />
			</div>
			<Footer />
		</div>
	);
}

export default App;
