

window.addEventListener("load", (event) => {
  var agentList = ["Bruce Wayne","Peter Parker", "Bruce Banner", "Steve Rogers", "Wade Wilson", "Clark Kent", "Natalia Romanova", "Matt Murdock", "Helen Parr", "Barry Allen"]



  agentList.forEach(displayDLs)
});


function agentList(){
var agentList = ["Brian Hernandez", "Matt Rosenblum"]

agentList.forEach(displayDLs)




}



function displayDLs(item, index){
	var displayArea = document.getElementById("displayArea");
	
	displayArea.innerHTML += "<tr class = 'unhide' id = '" + item + "'><td><a href='#' onclick='edl(this)'>"  + item + "</a></td><td><input type='checkbox' class='box' id = '" + item +"-box' onclick='hide(this)'></input></td><td><input class='task'></input></td><td><input class='note'></input></td><td><input type='time' class='time note'></input><label> ET </label></td><td><button class = 'clear' onclick='clearContents(this)' onmouseover='highlight(this)'onmouseleave='removeHighlight(this)'>Clear</button></td></tr>"


}

function red(item){
 	//item.style.backgroundColor = "red";
	var displayArea = document.getElementById("displayArea");
	displayArea.style = "background-color: red"

}