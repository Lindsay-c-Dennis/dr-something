import React from 'react';

const SongsList = (props) => {
	//debugger
		const showSongs = props.songTiles.map(songTile => {
			return (
				<span key={songTile.id} className="card card-inverse card-success card-primary text-center">
					<iframe width="30%" height="300" scrolling="no" frameborder="no" allow="autoplay" title={songTile.title} 
						src={songTile.streamUrl}>
					<h3>{songTile.title}</h3>
					</iframe>
					
				</span>
			)
		})


	return (
		<div>
			{ showSongs }
		</div>
	)
};

export default SongsList