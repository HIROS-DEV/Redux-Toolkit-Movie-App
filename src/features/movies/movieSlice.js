import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
	'movies/fetchAsyncMovies',
	async () => {
		const movieText = 'Harry';
		const response = await movieApi.get(
			`/?apikey=${APIKey}&s=${movieText}&type=movie`
		);
		return response.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	'movies/fetchAsyncShows',
	async () => {
		const seriesTect = 'NCIS';
		const response = await movieApi.get(
			`/?apikey=${APIKey}&s=${seriesTect}&type=series`
		);
		return response.data;
	}
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	'movies/fetchAsyncMovieOrShowDetail',
	async (id) => {
		const response = await movieApi.get(
			`/?apikey=${APIKey}&i=${id}&Plot=full`
		);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	selectedMovieOrShow: {},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.removeSelectedMovieOrShow = {};
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log('Pending');
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log('Fetched successfully!');
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log('Rejected!');
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log('Fetched successfully!');
			return { ...state, shows: payload };
		},
		[fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
			console.log('Fetched successfully!');
			return { ...state, selectedMovieOrShow: payload };
		},
	},
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
	state.movies.selectedMovieOrShow;
export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
