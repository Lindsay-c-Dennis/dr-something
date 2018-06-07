import React from 'react';

const Music = () => {
	return (
		<div>	
			<span className="card card-inverse card-success card-primary mb-3 text-center">
				<iframe width="32%" height="300" scrolling="no" frameborder="yes" allow="autoplay" 
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289848675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
				</iframe>
			</span>
			<span className="card card-inverse card-success card-primary mb-3 text-center">
				<iframe width="32%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289848675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
				</iframe>
			</span>
		</div>		
		);
}

export default Music;