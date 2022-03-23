import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

import './App.scss';

const Container = () => (
	<div className='container'>
		<Outlet />
	</div>
);

const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<Container />}>
						<Route path='/' element={<Home />} />
						<Route path='/movie/:imdbID' element={<MovieDetail />} />
						<Route path='*' element={<PageNotFound />} />
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
export default App;
