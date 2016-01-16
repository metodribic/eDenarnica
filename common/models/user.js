module.exports = function(User) {
	User.validatesPresenceOf('username');
	User.validatesLengthOf('password', {min: 5, message: { min: 'Password is too short!'}});
	User.validatesUniquenessOf('email', {message: 'Email already taken!'});
	User.validatesUniquenessOf('username', {message: 'Username already taken!'});
};
