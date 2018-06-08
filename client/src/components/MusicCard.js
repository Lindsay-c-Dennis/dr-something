import React from 'react';

const MusicCard = (props) => 
		<span className="card card-inverse card-success card-primary mb-3 text-center">
			<iframe width="32%" height="300" scrolling="no" frameborder="no" allow="autoplay" title={props.song.title} 
				src={props.song.streamUrl}>
			</iframe>
		</span>

export default MusicCard		
