$(function() {

	//var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0'; // default
	var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1iaAB7ZiO8-ng8LIxpd17JkgoibyurJeqSJ2-3_9EpcM/edit#gid=0'; // coins

	// Load an entire worksheet.
	// $('#statistics').sheetrock({
	// 	url: mySpreadsheet
	// });

	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());

	$('#list').sheetrock({
		url: mySpreadsheet,
		//query: "select A,C,D,I order by I desc",
		query: "select A,B,C,AQ,AR",
		fetchSize: 50,
		rowTemplate: HRTemplate
	});



});