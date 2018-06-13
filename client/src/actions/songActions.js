import fetch from "isomorphic-fetch";

export const fetchSongs = () => (dispatch) => {
		dispatch({ type: 'LOADING_SONGS' });
		fetch('http://localhost:3001/songs')
			.then(response => response.json())
			.then(responseJSON => {
				const songs = responseJSON;
				dispatch({ type: 'FETCH_SONGS_SUCCESS', payload: songs })
			})
			.catch(error => dispatch({ type: 'FETCH_SONGS_FAILED', payload: error }))
}


