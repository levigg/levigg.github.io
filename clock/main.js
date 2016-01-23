var j;

function startTime() {
    var today = new Date();
    
    var m = today.getMinutes();
    var s = today.getSeconds();
	/*var h = today.getHours();
	h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);*/
    //document.getElementById('txt').innerHTML =
    //h + ":" + m + ":" + s;
    
	
	
	document.getElementById('min1').innerHTML=transform(Math.floor(m/10));					    document.getElementById('min2').innerHTML=transform(m%10);
	document.getElementById('sec1').innerHTML=transform(Math.floor(s/10));
	document.getElementById('sec2').innerHTML=transform(s%10);
	
	var t = setTimeout(startTime, 500);
}
/*function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}*/
function transform(i) {
    if (i == 1) {
		j = "<img src='images/number_01.png' width='200' height='333' alt=''/>";
	}else if(i == 2){
		j = "<img src='images/number_02.png' width='200' height='333' alt=''/>";
	}else if(i == 3){
		j = "<img src='images/number_03.png' width='200' height='333' alt=''/>";
	}else if(i == 4){
		j = "<img src='images/number_04.png' width='200' height='333' alt=''/>";
	}else if(i == 5){
		j = "<img src='images/number_05.png' width='200' height='333' alt=''/>";
	}else if(i == 6){
		j = "<img src='images/number_06.png' width='200' height='333' alt=''/>";
	}else if(i == 7){
		j = "<img src='images/number_07.png' width='200' height='333' alt=''/>";
	}else if(i == 8){
		j = "<img src='images/number_08.png' width='200' height='333' alt=''/>";
	}else if(i == 9){
		j = "<img src='images/number_09.png' width='200' height='333' alt=''/>";
	}else if(i == 0){
		j = "<img src='images/number_00.png' width='200' height='333' alt=''/>";
	}
    return j;
}