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