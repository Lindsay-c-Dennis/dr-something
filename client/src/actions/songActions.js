import fetch from "isomorphic-fetch";

export function fetchSongs() {
	return(dispatch) => {
		dispatch({ type: 'LOADING_SONGS' });
		return fetch('http://localhost:3001/songs')
			.then(response => response.json())
			.then(responseJSON => {
				const songs = responseJSON.songs;
				dispatch({ type: 'FETCH_SONGS', payload: songs })
			})
	}
}