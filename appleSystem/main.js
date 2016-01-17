// JavaScript Document
var relation1=0;
var relation2=0;
var relation3=0;
var relation4=0;
var relation5=0;
var relation6=0;
var relation7=0;
var relation8=0;
var relation9=0;
var relation10=0;

function buy(){
	
//存貨量
	var buy1=document.getElementById("buy1").value;
	var buy2=document.getElementById("buy2").value;
	var buy3=document.getElementById("buy3").value;
	var buy4=document.getElementById("buy4").value;
	var buy5=document.getElementById("buy5").value;

	var inventory1=document.getElementById("inventory1").value;
	var inventory2=document.getElementById("inventory2").value;
	var inventory3=document.getElementById("inventory3").value;
	var inventory4=document.getElementById("inventory4").value;
	var inventory5=document.getElementById("inventory5").value;
	
	document.getElementById("inventory1").value=inventory1-buy1;
	document.getElementById("inventory2").value=inventory2-buy2;
	document.getElementById("inventory3").value=inventory3-buy3;
	document.getElementById("inventory4").value=inventory4-buy4;
	document.getElementById("inventory5").value=inventory5-buy5;
	
//需求率	
	var para6=document.getElementById("para6").value;
	
	var demand1=document.getElementById("demand1").value;
	var demand2=document.getElementById("demand2").value;
	var demand3=document.getElementById("demand3").value;
	var demand4=document.getElementById("demand4").value;
	var demand5=document.getElementById("demand5").value;
	
	document.getElementById("demand1").value=parseFloat(demand1)+parseFloat((buy1-demand1)*para6);
	document.getElementById("demand2").value=parseFloat(demand2)+parseFloat((buy2-demand2)*para6);
	document.getElementById("demand3").value=parseFloat(demand3)+parseFloat((buy3-demand3)*para6);
	document.getElementById("demand4").value=parseFloat(demand4)+parseFloat((buy4-demand4)*para6);
	document.getElementById("demand5").value=parseFloat(demand5)+parseFloat((buy5-demand5)*para6);
	
//ROP
	var para3=document.getElementById("para3").value;
	var para4=document.getElementById("para4").value;
	
	document.getElementById("rop1").value=parseInt(demand1*para3)+parseInt(2*para4*Math.sqrt(para3));
	document.getElementById("rop2").value=parseInt(demand2*para3)+parseInt(2*para4*Math.sqrt(para3));
	document.getElementById("rop3").value=parseInt(demand3*para3)+parseInt(2*para4*Math.sqrt(para3));
	document.getElementById("rop4").value=parseInt(demand4*para3)+parseInt(2*para4*Math.sqrt(para3));
	document.getElementById("rop5").value=parseInt(demand5*para3)+parseInt(2*para4*Math.sqrt(para3));
	
//EOQ
	var para1=document.getElementById("para1").value;
	var para2=document.getElementById("para2").value;
	
	document.getElementById("eoq1").value=parseInt(Math.sqrt(2*demand1*365*para1/para2));
	document.getElementById("eoq2").value=parseInt(Math.sqrt(2*demand2*365*para1/para2));
	document.getElementById("eoq3").value=parseInt(Math.sqrt(2*demand3*365*para1/para2));
	document.getElementById("eoq4").value=parseInt(Math.sqrt(2*demand4*365*para1/para2));
	document.getElementById("eoq5").value=parseInt(Math.sqrt(2*demand5*365*para1/para2));
	
//訂單
	var content2=document.getElementById("content2").innerHTML;
	document.getElementById("content2").innerHTML=content2+"<p>休閒傘："+buy1+" 大陽傘："+buy2+" 啤酒桌："+buy3+" 會議桌："+buy4+" 電腦桌："+buy5+"</p>";
	
	
	
	if(buy1>0&&buy2>0){
		relation1=relation1+1;
	}
	if(buy1>0&&buy3>0){
		relation2=relation2+1;
	}
	if(buy1>0&&buy4>0){
		relation3=relation3+1;
	}
	if(buy1>0&&buy5>0){
		relation4=relation4+1;
	}
	if(buy2>0&&buy3>0){
		relation5=relation5+1;
	}
	if(buy2>0&&buy4>0){
		relation6=relation6+1;
	}
	if(buy2>0&&buy5>0){
		relation7=relation7+1;
	}
	if(buy3>0&&buy4>0){
		relation8=relation8+1;
	}
	if(buy3>0&&buy5>0){
		relation9=relation9+1;
	}
	if(buy4>0&&buy5>0){
		relation10=relation10+1;
	}
	
	var content3=document.getElementById("content3").innerHTML;
	document.getElementById("content3").innerHTML="<p>{休閒傘,大陽傘}:"+relation1+"</p><p> {休閒傘,啤酒桌}:"+relation2+"</p><p> {休閒傘,會議桌}:"+relation3+"</p><p> {休閒傘,電腦桌}:"+relation4+"</p><p> {大陽傘,啤酒桌}:"+relation5+"</p><p> {大陽傘,會議桌}:"+relation6+"</p><p> {大陽傘,電腦桌}:"+relation7+"</p><p> {啤酒桌,會議桌}:"+relation8+"</p><p> {啤酒桌,電腦桌}:"+relation9+"</p><p> {會議桌,電腦桌}:"+relation10+"</p>";
}

function buy1(){
	var inventory1=document.getElementById("inventory1").value;
	var eoq1=document.getElementById("eoq1").value;
	document.getElementById("inventory1").value=parseInt(inventory1)+parseInt(eoq1);
}

function buy2(){
	var inventory2=document.getElementById("inventory2").value;	
	var eoq2=document.getElementById("eoq2").value;	
	document.getElementById("inventory2").value=parseInt(inventory2)+parseInt(eoq2);
}

function buy3(){
	var inventory3=document.getElementById("inventory3").value;	
	var eoq3=document.getElementById("eoq3").value;
	document.getElementById("inventory3").value=parseInt(inventory3)+parseInt(eoq3);
}

function buy4(){
	var inventory4=document.getElementById("inventory4").value;
	var eoq4=document.getElementById("eoq4").value;
	document.getElementById("inventory4").value=parseInt(inventory4)+parseInt(eoq4);
}

function buy5(){
	var inventory5=document.getElementById("inventory5").value;
	var eoq5=document.getElementById("eoq5").value;
	document.getElementById("inventory5").value=parseInt(inventory5)+parseInt(eoq5);
}