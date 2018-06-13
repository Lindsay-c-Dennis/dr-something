import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/songActions.js'
import SongsList from '../components/SongsList'

class Music extends React.Component {

	componentDidMount() {
        if (this.props.songTiles.length === 0) {
        this.props.actions.fetchSongs();
    	}
    }

	render() {
		//debugger
		return (
			<div>	
				<div className="row justify-content-center">
					<h1>Music</h1>
				</div>
				<SongsList songTiles={this.props.songTiles} loading={this.props.loading} />
					
			</div>		
			);
	}
}

function mapStateToProps(state) {
	//debugger
	return {
		songTiles: state.songs.tiles,
		loading: state.songs.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);