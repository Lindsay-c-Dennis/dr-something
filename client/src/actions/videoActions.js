import fetch from "isomorphic-fetch";

export const fetchVids = () => (dispatch) => {
		dispatch({ type: 'LOADING_VIDEOS' });
		fetch('http://localhost:3001/videos')
			.then(response => response.json())
			.then(responseJSON => {
				const videos = responseJSON;
				dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: videos })
			})
			.catch(error => dispatch({ type: 'FETCH_VIDEOS_FAILED', payload: error }))
}