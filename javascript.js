


function addToSmall(){
	document.getElementById('size1').innerHTML="S";
	document.getElementById('smallsize').style.border="2px solid black";
	document.getElementById('mediumsize').style.border="1px solid #CCCCCC";
	document.getElementById('largesize').style.border="1px solid #CCCCCC";
};



function addToMedium(){
	document.getElementById('size1').innerHTML="M";
	document.getElementById('smallsize').style.border="1px solid #CCCCCC";
	document.getElementById('mediumsize').style.border="2px solid black";
	document.getElementById('largesize').style.border="1px solid #CCCCCC";
};



function addToLarge(){
	document.getElementById('size1').innerHTML="L";
	document.getElementById('smallsize').style.border="1px solid #CCCCCC";
	document.getElementById('mediumsize').style.border="1px solid #CCCCCC";
	document.getElementById('largesize').style.border="2px solid black";
};


function showIt(){
	document.getElementById('minicart').style.display="block";
	document.getElementById('mycart').style="background:white;border:1px solid #CCCCCC;border-bottom:2px solid white;height:30px;z-index:2;";
	

};

function hiddenIt(){
	document.getElementById('minicart').style.display="none";
	document.getElementById('mycart').style="background:none;border:none;";
	

};

function addToCart(){
	var size= document.getElementById('size1').innerHTML;
	

	
	if (size=="S") {
		var sgetQuantity= parseInt(document.getElementById('squantity').innerHTML);
		

		document.getElementById('small').style="display:block;";
		document.getElementById('minicart').style="display:block;";
		document.getElementById('empty').style="display:none";
		document.getElementById('squantity').innerHTML=sgetQuantity+1;

	} else if (size=="M") {
		var mgetQuantity= parseInt(document.getElementById('mquantity').innerHTML);
		

		document.getElementById('medium').style="display:block;";
		document.getElementById('minicart').style="display:block;";
		document.getElementById('empty').style="display:none";
		document.getElementById('mquantity').innerHTML=mgetQuantity+1;
		
		
	}
	else if (size=="L") {
		var lgetQuantity= parseInt(document.getElementById('lquantity').innerHTML);
		

		document.getElementById('large').style="display:block;";
		document.getElementById('minicart').style="display:block;";
		document.getElementById('empty').style="display:none";
		document.getElementById('lquantity').innerHTML=lgetQuantity+1;
		
	}else if(size==""){
		document.getElementById('highlight').style="-moz-animation:hlight 1s;-webkit-animation:hlight 1s;-o-animation:myfirst 1s;height:20px;width:30px;"}

	};
	





