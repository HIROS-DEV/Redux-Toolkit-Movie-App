import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from '../../features/movies/movieSlice';

import MovieListing from '../MovieListing/MovieListing';

import './Home.scss';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncShows());
	}, [dispatch]);

	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	);
};
export default Home;
