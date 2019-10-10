


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
	

}

function hiddenIt(){
	document.getElementById('minicart').style.display="none";
	document.getElementById('mycart').style="background:none;border:none;";
	

}




