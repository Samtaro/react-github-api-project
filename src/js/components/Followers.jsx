var React = require("react");
var Link = require('react-router').Link;
var $ = require('jquery');

var GithubUser = require('./GithubUser')

var Followers = React.createClass({
	// componentDidMount: function(){
	// 		$.getJSON(`https://api.github.com/users/{this.props.params.username}/followers?access_token=305150e4c2d776c68dcc844471c8ebc66f267a5b`)
	// 			.then(
	// 				function(userFollowers){
	// 					this.setState({
	// 						followers: userFollowers
	// 					})
	// 				})
	// },
	render: function(){

		return (
			// if (!this.state.followers) {
   // 				return <div>LOADING FOLLOWERS...</div>
  	// 		}
  			// else{
			<div className="followers-page">
				// <h3>Followers of {this.props.params.username}</h3>
					// <ul>
					// 	{this.state.followers.map(function(user){
					// 		<GithubUser user={user}/>
					// 	})}
					// </ul>
			</div>
			// }
		)

	}



});

module.exports = Followers;