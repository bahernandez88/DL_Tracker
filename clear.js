function clearContents(btn){
	let timeInp = btn.parentNode.previousSibling.firstChild;;
	let noteInp = btn.parentNode.previousSibling.previousSibling.firstChild;
	let taskInp = btn.parentNode.previousSibling.previousSibling.previousSibling.firstChild;

	//window.alert(btn.parentNode.previousSibling.firstChild.value);
	//btn.parentNode.previousSibling.firstChild.value = "";
	//btn.parentNode.previousSibling.firstChild.value = "";
	//btn.parentNode.previousSibling.previousSibling.firstChild.value = "";
	//btn.parentNode.previousSibling.previousSibling.previousSibling.firstChild.value = "";

	timeInp.value = "";
	noteInp.value = "";
	taskInp.value = "";


}

function highlight(btn){
	let timeInp = btn.parentNode.previousSibling.firstChild;;
	let noteInp = btn.parentNode.previousSibling.previousSibling.firstChild;
	let taskInp = btn.parentNode.previousSibling.previousSibling.previousSibling.firstChild;

	timeInp.style = "background-color:rgba(144,21,136,.75); color:white;"
	noteInp.style = "background-color:rgba(144,21,136,.75); color:white;"
	taskInp.style = "background-color:rgba(144,21,136,.75); color:white;"

}

function removeHighlight(btn){
	let timeInp = btn.parentNode.previousSibling.firstChild;;
	let noteInp = btn.parentNode.previousSibling.previousSibling.firstChild;
	let taskInp = btn.parentNode.previousSibling.previousSibling.previousSibling.firstChild;

	
	timeInp.style = "background-color: white; color:black;"
	noteInp.style = "background-color: white; color:black;"
	taskInp.style = "background-color: white; color:black;"
}