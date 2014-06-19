var routes = module.exports = require('express').Router();
routes.get('/assessment/create', function(req, res){
	var traitify = require("traitify");
	// live url
	//traitify.setHost("api.traitify.com");

	// testing url
	traitify.setHost("api-sandbox.traitify.com");

	traitify.setVersion("v1");
	traitify.setPrivateKey("rg8ogn28rfjdcr0708tm3bgmdi");
	traitify.createAssessment("deck-id", function(assessment){
	  // Use assessment here.
	  res.send(assessment);
	});
});
