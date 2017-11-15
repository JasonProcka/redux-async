import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => ( // we don't export here, as we need to use connect at the bottom
	<div>
		<h1>Home</h1>
		<p>This is the home page of my app.</p>
		<button onClick={() => props.changePage()}>Go to about page via redux</button>
	</div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about')
}, dispatch)

export default connect(
	null,
	mapDispatchToProps
)(Home)