import React from 'react';
import { connect } from 'react-redux';
import MusicCard from '../components/MusicCard'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/songActions.js'

class Music extends React.Component {

	componentDidMount() {
    	if (this.props.songTiles.length === 0) {
      		this.props.actions.fetchSongs();
    	}
  	}

	render() {
		const { songs } = this.props
		return (
			<div>	
				<div className="row justify-content-center">
					<h1>Music</h1>
				</div>
				{songs.map(song => <MusicCard key={song.id} song={song} />)}	
			</div>		
			);
	}
}

function mapStateToProps(state) {
	return {songs: state.songs}
}

export default connect(mapStateToProps)(Music);