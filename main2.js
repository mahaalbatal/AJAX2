console.log("ajax!");

document.querySelector("#getDataPara").addEventListener("click", getData);

let fNameInput = document.querySelector("#fNameInput");
let lNameInput = document.querySelector("#lNameInput");
let DOBInput = document.querySelector("#DOBInput");
let addDataPara = document.querySelector("#addDataPara");

addDataPara.addEventListener('click', (event)=>{
	let req = new XMLHttpRequest();
		req.onreadystatechange = function(resEvent){
			if(req.readyState === XMLHttpRequest.DONE){

				if (req.status === 200) {
					let responseJSON = JSON.parse(req.responseText);
					console.log(responseJSON);
					if(responseJSON.success == "true"){
						document.querySelector("#formMessage").innerHTML = "Thank you!";
						document.querySelector("#formMessage").style.color = "green";

						fNameInput.remove();
						lNameInput.remove(); 
						DOBInput.remove();
						addDataPara.remove(); 

					}else{
						document.querySelector("#formMessage").innerHTML = "OOPS FAILURE";
					}
				
				} else {
					//status code error
				}
		}
	}
	req.open("POST", "process-insert.php");
	req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	req.send(`fName=${fNameInput.value}&lName=${lNameInput.value}&DOB=${DOBInput.value}`);
});



let xhr = new XMLHttpRequest();

function getData(event){
	 
	xhr.onreadystatechange = handlerFunction; 
	xhr.open("GET", "select-persons.php", true); //true means it is asynchronous
	xhr.send();
}

function handlerFunction (event){     
	console.log("the ready state changed!");
	if(xhr.readyState === XMLHttpRequest.DONE){
		console.log("readystate is DONE");

		if (xhr.status === 200) {
			console.log(xhr.responseText);
			
			let responseJSON = JSON.parse(xhr.responseText);
			console.log(responseJSON);

			let div = document.createElement("div");
			for(let i=0; i<responseJSON.length; i++){
				let p = document.createElement("p");
				let pText = document.createTextNode(`${responseJSON[i].personId}, 
					${responseJSON[i].fName},
					${responseJSON[i].lName},
					${responseJSON[i].DOB}`)

				p.appendChild(pText);
				div.appendChild(p);
			}

			document.querySelector("#personData").appendChild(div);
		
		} else {
			//status code error
		}
	}
};