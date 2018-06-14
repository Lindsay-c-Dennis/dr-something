import React from 'react';

const VidsList = (props) => {
	const showVids = props.vidTiles.map(vidTile => {
		return (
			<div key={vidTile.id} className="card card-inverse card-success card-primary text-center">
					<h3>{vidTile.title}</h3>
					<p>{vidTile.description}</p>
					<iframe width="70%" height="400" scrolling="no" title={vidTile.title} 
						src={vidTile.video_url}>
					</iframe>			
			</div>
		)
	})

	return (
		<div>
			{ showVids }
		</div>	
	)
}

export default VidsList;