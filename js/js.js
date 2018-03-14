function dropdown(target,target2) {
	if(target.style.display == "none"){
		target.style.display = "block"

		if(target2 != false){
			// target2.style.marginTop = "113px"
			target2.style.marginTop ="18vh"
		}
	} else {
		target.style.display = "none"

		if(target2 != false){
			target2.style.marginTop = "0"
		}
	}
}

// TEMPORARY TO STOP CODEKIT ERRORS

dropdown(false,false);
