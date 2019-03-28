window.onload = function(){
	console.log("app loading");
	loadLandingView();
}

function loadLandingView(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(readyState = 4 && xhr.status == 200){
			console.log('RESPONSE RECIEVED');
			$('#view').html(xhr.responseText);
		}
	}
}
