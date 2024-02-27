
/*
window.addEventListener("load", (event) => {
	const cbox = document.querySelectorAll(".box");

 	for (let i = 0; i < cbox.length; i++) {
     		cbox[i].addEventListener("click", function() {
			
       			cbox[i].classList.toggle("hideBox");
			//window.alert(cbox[i].id);
			let hiddenBox = cbox[i].id + "-hide";
			//cbox[i].style = "background-color: red";
			thisBoxID = cbox[i].id; 
			
			thisBoxID = thisBoxID.split("-");
			thisBoxID = thisBoxID[0];
			//window.alert(thisBoxID);
			document.getElementById(thisBoxID).classList.toggle("hide");
		
			
			hiddenArea = document.getElementById("hiddenArea");
			hiddenArea.innerHTML += "<tr id ='" + hiddenBox + "'><a href=''>" + thisBoxID +  "</a></tr>";
			//hiddenArea.innerHTML += "<tr>" + document.getElementById(thisBoxID).innerHTML + "</tr>";
			
     });
 }
}); 
*/

function hide(myInput){

			let parent = myInput.parentNode.parentNode;		

			//window.alert(parent.classList);


			let thisBoxID = myInput.id.split("-");

			thisBoxID = thisBoxID[0];

			if(parent.classList == "unhide"){

				parent.classList.toggle("hide");
				
				parent.classList.toggle("unhide");

				hiddenArea = document.getElementById("hiddenArea");

				//hiddenArea.innerHTML += parent.innerHTML;

				hiddenArea.innerHTML += "<tr id = '"+ thisBoxID + "-hidden' >" + parent.innerHTML + "</tr>";

				document.getElementById(thisBoxID).checked = false;

				myInput.checked = false;

				
			}

			else if (parent.classList == ""){

				document.getElementById(thisBoxID).classList.toggle("hide");

				document.getElementById(thisBoxID).classList.toggle("unhide");
				
				myInput.checked = false;

				
				hiddenBox = thisBoxID + "-hidden";
				document.getElementById(hiddenBox).remove();

			}
			
			/*
			let hiddenBox = cbox[i].id + "-hide";
			
			thisBoxID = cbox[i].id; 
			
			thisBoxID = thisBoxID.split("-");
			thisBoxID = thisBoxID[0];
			
			document.getElementById(thisBoxID).classList.toggle("hide");
		
			
			hiddenArea = document.getElementById("hiddenArea");
			hiddenArea.innerHTML += "<tr id ='" + hiddenBox + "'>" + document.getElementById(thisBoxID).innerHTML +  "</tr>";
			//hiddenArea.innerHTML += "<tr>" + document.getElementById(thisBoxID).innerHTML + "</tr>";

			*/





}
 





function unhide(){
	let hbox = document.querySelectorAll(".hideBox");

	//hbox[0].classList.toggle("box");

	for (let x = 0; x < hbox.length; x++) {
		hbox[x].addEventListener("click", function() {
  			
			thisBoxID = hbox[x].id; 
		
			let hiddenBox = thisBoxID + "-hide";
			
			document.getElementById(thisBoxID).checked = false;

			thisBoxID = thisBoxID.split("-");
			
			thisBoxID = thisBoxID[0];
			
					
			document.getElementById(thisBoxID).classList.toggle("hide");
			document.getElementById(thisBoxID).classList.toggle("unhide");

			document.getElementById(hiddenBox).remove();
			//hiddenBox.parentNode.remove();
			
     		});

	}
/*

	for (let i = 0; i < cbox.length; i++) {
     		hbox[i].addEventListener("click", function() {
			
       			hbox[i].classList.toggle("hideBox");
			
			//cbox[i].style = "background-color: red";
			//thisBoxID = hbox[i].id; 
			//thisBoxID = thisBoxID.split("-");
			//thisBoxID = thisBoxID[0];
			//window.alert(thisBoxID);
			//document.getElementById(thisBoxID).classList.toggle("unhide");
			
			
     		});

	} 
*/
	hidden = document.getElementById("hidden");


	hidden.classList.toggle("unhide");



}


function display(){



}


