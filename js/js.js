function dropdown(target,target2) {
	if(target.style.display == "none"){
		target.style.display = "block"

		if(target2 != false){
			target2.style.marginTop = "101px"
		}
	} else {
		target.style.display = "none"

		if(target2 != false){
			target2.style.marginTop = "0"
		}
	}
}
