import React from 'react';

const PicsList = (props) => {
	const showPics = props.picTiles.map(picTile => {
		return (
			<div className="justify-content-center">
				<img src={picTile.image_url} alt={picTile.artist} width="75%" />
				<h3><a href={picTile.artist_url}>{picTile.artist}</a> performing at {picTile.venue} on {picTile.date}</h3>
			</div>
		)
	})

	return (
		<div>
			{ showPics }
		</div>
	)
}

export default PicsList;