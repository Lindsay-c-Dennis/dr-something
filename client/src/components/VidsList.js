import React from 'react';

const VidsList = (props) => {
	const showVids = props.vidTiles.map(vidTile => {
		return (
			<div key={vidTile.id} className="card card-inverse card-success card-primary text-center">
					<iframe width="70%" height="300" scrolling="no" frameborder="no" title={vidTile.title} 
						src={vidTile.streamUrl}>
					<h3>{vidTile.title}</h3>
					<p>{vidTile.description}</p>
					</iframe>			
			</div>
		)
	})

	return (
		<div>
			{ showVids }
		<div>	
	)
}