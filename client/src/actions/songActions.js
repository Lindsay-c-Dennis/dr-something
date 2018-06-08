import fetch from "isomorphic-fetch";

export function fetchSongs() {
	return(dispatch) => {
		dispatch({ type: 'LOADING_SONGS' });
		return fetch('http://localhost:4000/db')
			.then(response => response.json())
			.then(responseJSON => {
				const songs = responseJSON.songs;
				dispatch({ type: 'FETCH_SONGS', payload: songs })
			})
	}
}