import React from 'react';

const PicsList = (props) => {
	const showPics = props.picsTiles.map(picTile => {
		return (
			<div className="justify-content-center">
				<img src={picTile.image_url} alt={picTile.artist} width="75%" />
				<p><a href={picTile.artist_url}>{picTile.artist} performing at {picTile.venue} on {picTile.date}</p>
			</div>
		)
	})

	return ({ showPics })
}

export default PicsList;