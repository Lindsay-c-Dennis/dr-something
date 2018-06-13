import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/illustrationActions.js'
import PicsList from '../components/PicsList'

class SoundsIllustrated extends React.Component {

	componentDidMount() {
		if (this.props.picTiles.length === 0) {
        this.props.actions.fetchPics();
    	}
	}

	render() {
		return (
			<div>
				<div className="row justify-content-center">
					<h1><strong>Sounds Illustrated</strong></h1>
					<h2>Hand-Drawn Documentation of Live Music in Portland</h2>
					<h3>Here is a selection of sketches I’ve drawn of local performers. It’s an attempt to both 
					document Portland’s vibrant music scene and capture the energy of live performance. You can find a 
					complete collection of these live sketches and links to streaming and purchase-able music at my 
					<a href="https://www.facebook.com/pg/drsomethingmusic/photos/?tab=album&album_id=843212045724963"> Facebook page</a>. 
					Archival-grade prints can be purchased on my <a href="https://drsomething.bandcamp.com/merch/live-band-sketch-prints">merch page</a>.</h3>
					<h3>Note to bands: feel free to use drawings on your websites and social media. I just ask that 
					you cite me (Alison Dennis) and, preferably, provide a link a link to my site.</h3>
				</div>
				<PicsList picTiles={this.props.picTiles} loading={this.props.loading} />
			</div>	
		)
	}
}

function mapStateToProps(state) {
	
	return {
		picTiles: state.illustrations.pics,
		loading: state.illustrations.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(SoundsIllustrated);