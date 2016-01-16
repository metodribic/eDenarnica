module.exports = function(Capital) {
	Capital.validatesPresenceOf('description');
	Capital.validatesPresenceOf('userId');
	Capital.validatesPresenceOf('type');
	Capital.validatesPresenceOf('amount');
	Capital.validatesNumericalityOf('amount', {number: true});
	Capital.validatesPresenceOf('created');
	Capital.validatesPresenceOf('lastUpdated');
};
