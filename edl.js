function edl(dl){
	if(dl.getAttribute("style")==null || dl.getAttribute("style") == "font-weight: unset;"){
		dl.style = "font-weight:bold";
	
	}
	else{
	dl.style = "font-weight:unset";

	}


}