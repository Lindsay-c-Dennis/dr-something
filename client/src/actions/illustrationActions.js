import fetch from "isomorphic-fetch";

export const fetchPics = () => (dispatch) => {
		dispatch({ type: 'LOADING_PICTURES' });
		fetch('http://localhost:3001/illustrations')
			.then(response => response.json())
			.then(responseJSON => {
				const pics = responseJSON;
				dispatch({ type: 'FETCH_PICTURES_SUCCESS', payload: pics })
			})
			.catch(error => dispatch({ type: 'FETCH_PICTURES_FAILED', payload: error }))
}