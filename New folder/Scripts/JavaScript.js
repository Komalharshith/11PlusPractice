   var xmlhttp = new XMLHttpRequest();
var url = "Add.txt";

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var currentIndex = 0;
    document.getElementById('num1').value = arr[currentIndex].Number1;
    document.getElementById('num2').value = arr[currentIndex].Number2;
    document.getElementById('Forward').click(function () {
        currentIndex++;
        if (currentIndex >= arr.length) { currentIndex = 0; }
        else {
            document.getElementById('num3').value = ""
            document.getElementById('num1').value = arr[currentIndex].Number1;
            document.getElementById('num2').value = arr[currentIndex].Number2;
        }
    });
    document.getElementById('Backward').click(function () {
        currentIndex--;
        if (currentIndex >= arr.length) { currentIndex = 0; }
        else {
            document.getElementById('num3').value = ""
            document.getElementById('num1').value = arr[currentIndex].Number1;
            document.getElementById('num2').value = arr[currentIndex].Number2;
        }
    });
}

function sum() {
    n1 = parseInt(document.getElementById('num1').value);
    n2 = parseInt(document.getElementById('num2').value);
    n3 = n1 + n2;
    if (document.getElementById('num3').value == "")
    {  
        alert('Please enter your answer');
            
    }
                 
    else if (document.getElementById('num3').value != n3) { alert('Think again! & try'); }
}
    
