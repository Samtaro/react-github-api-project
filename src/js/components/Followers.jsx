var React = require('react');

var $ = require('jquery');

var GithubUser = require('./GithubUser')

var Followers = React.createClass({
	componentDidMount: function(){
			$.getJSON(`https://api.github.com/users/{this.props.params.username}/followers?access_token=305150e4c2d776c68dcc844471c8ebc66f267a5b`)
				.then(
					function(userFollowers){
						that.setState({
							followers: userFollowers
						})
					})
	},
	render: function(){
		
		

  		return (
    		<div className="followers-page">
        		<h2>Followers of {this.props.params.username}</h2>
        		<ul>
            		
        		</ul>
    		</div>
  		);
	}
});

module.exports = Followers;