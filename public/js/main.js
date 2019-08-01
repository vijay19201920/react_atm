

$(document).ready(function(){
	$('#amount').blur(function(){
		var number = $('.enter-money-block input').val();
		number= Number(Math.floor(number));
		$('.enter-money-block input').attr("value",number);
	});

	$('.get-money-btn').click(function(){
		var amountDispensed = $('.enter-money-block input').attr("value");
	
		
	var amtArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
	resultArray = [];
	var num = null;

	for (let i = 0; i < amtArray.length; i++) {
            resultArray.push(Math.floor(amountDispensed / amtArray[i]));
            amountDispensed = amountDispensed % amtArray[i];
        }
		
		
        var notes2000 = resultArray[0];
        var notes500 = resultArray[1];
        var notes200 = resultArray[2];
		var notes100 = resultArray[3];
		var notes50 = resultArray[4];
		var notes20 = resultArray[5];
		var notes10 = resultArray[6];
		var notes5 = resultArray[7];
		var notes2 = resultArray[8];
		var notes1 = resultArray[9];
		var total = notes2000 + notes500 + notes200 + notes100 + notes50 + notes20 + notes10 + notes5 + notes2 + notes1
		console.log(resultArray);
		
		document.getElementById("note2000").innerHTML = notes2000;
		document.getElementById("note500").innerHTML = notes500;
		document.getElementById("note200").innerHTML = notes200;
		document.getElementById("note100").innerHTML = notes100;
		document.getElementById("note50").innerHTML = notes50;
		document.getElementById("note20").innerHTML = notes20;
		document.getElementById("note10").innerHTML = notes10;
		document.getElementById("note5").innerHTML = notes5;
		document.getElementById("note2").innerHTML = notes2;
		document.getElementById("note1").innerHTML = notes1;
		document.getElementById("total").innerHTML = total;
	});
});
