function createTable() {
      
    var myTable = document.getElementById("Times-Table");
	      
    var table = document.createElement('TABLE');
    table.border='1';
	
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=1; i<=13; i++){
       var tr = document.createElement('TR');
       var x = document.createElement("TH");
	   if(i==1)
	   {var t = document.createTextNode("");
		x.appendChild(t);
		tr.appendChild(x);
		tableBody.appendChild(tr);}
		else
		{var t = document.createTextNode(i-1);
			x.appendChild(t);
			tr.appendChild(x);
			//tr.style.color="blue";
			tableBody.appendChild(tr);
		}
       for (var j=1; j<13; j++){
			if(i==1){ var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode(j));
		   td.setAttribute("style", "width:47px;height:27px;background-color:grey");
		   tr.appendChild(td);
				}
			else{
			var inputId="Inputs"+j;
			var td = document.createElement('TD');
			td.width='75';
			td.appendChild(createInput(inputId));
			td.setAttribute("style", "width:47px;height:27px;background-color:blue");
			tr.appendChild(td);
			}
		   }
    }
    myTable.appendChild(table);

}
function createInput(x){
var n=document.createElement('input');
n.setAttribute("type", "text");
n.setAttribute("style", "width:45px;height:25px;background-color:#FAFFFF");
n.id=x;
return n;
}


