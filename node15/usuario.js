

router.get('/vacaction/:username',function(req, res){


	let user = {

		username: req.params.username,
		dayOfVacation: '23/05/2017' 

	};


	res.json(user);


});
 module.exports = router;	









