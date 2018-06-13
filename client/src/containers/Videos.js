import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/videoActions';
import { connect } from 'react-redux';
import VidsList from '../components/VidsList';

class Videos extends React.Component {

	componentDidMount() {
		if (this.props.vidTiles.length === 0) {
			this.props.actions.fetchVids(); 
		}
	}

	render() {
		return (
			<div className="justify-content-center">
				<h1><strong>Videos</strong></h1>
				<h3>You can find a couple music videos and a live video below. 
				For more videos and playlists, check out the <a href="https://www.youtube.com/user/doctorsomething">Dr. Something YouTube page</a>.</h3>
				<VidsList vidTiles={this.props.vidTiles} loading={this.props.loading} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		vidTiles: state.videos.vids, 
		loading: state.videos.loading
	}
}	

const mapDispatchToProps = (dispatch) => {
	return {actions: bindActionCreators(actions, dispatch)}
}



export default connect(mapStateToProps, mapDispatchToProps)(Videos)