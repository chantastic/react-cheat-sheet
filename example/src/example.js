var React = require('react');
var ReactCheatSheet = require('react-cheat-sheet');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactCheatSheet />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
