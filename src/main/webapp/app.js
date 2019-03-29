window.onload = function(){
	console.log("app loading");
	loadLandingView();
}

function loadLandingView(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(readyState = 4 && xhr.status == 200){
			console.log('LOADING RESPONSE RECIEVED');
			$('#view').html(xhr.responseText);
		}
	}
}
//String check
function validString (str){
	if (str == null || str == ''){
		return false
	}
	else return true;
}
//Login
function loginUser(){
	var username = $('#username').val();
	var password = $('#password').val();
	
	if(validString(username) && validString(password)){
		var user = {
				username: username,
				password: password
		};
	
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(readyState == 4 && xhr.status == 200){
			console.log('LOGIN RESPONSE RECIEVED');
			var user = JSON.parse(xhr.responseText);	//get user
			console.log(xhr.getAllResponseHeaders());
			if(user == null){							//login fail
				console.log('LOGIN FAIL');
				$('#view').html("Could not log you in, please check your credentials");
			}
			else{
				console.log('Success! bringing to homepage');
				//load view;
			}
		}
	}
	xhr.open("POST", "login");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(user));
	}
	else{
		//User has not put in anything for username and password
		$('#view').html("Please enter a username and password!");
	}
}
//submit reimbursement
function submitReimb(){
	var amount = $('#amount').val();
	var submitted = $('#date').val();	//should make this a trigger
	var author = $('#username').val();	//Should also be trigger?
	var type = $('#reimbType').val(); 	//need to turn into an id. Maybe make a dropdown? Do case statements?
	
	if(validString(reimbAmout) && validString(reimbSubmitted) && validString(reimbAuthor) && validString(reimbType)){
		var reimbursement = {
			reimbAmount = amount,
			reimbSubmitted = submitted,
			reimbAuthor = author,
			reimbType = type
		};
	
	var xhr = new HttpRequest();
	xhr.onreadystatechange = function(){
		if(readyState = 4 && xhr.status == 200){
			console.log('SUBMITTED');
			
		}
		else {
			console.log('SUBMISSION FAILED');
		}
	}
	xhr.open("POST", "submit");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(reimbursement));
	}
	else console.log('Please fill out all forms');
}
