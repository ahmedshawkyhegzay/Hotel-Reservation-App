
var _1st = 100 ,
	_2nd = 200 , 
	_3rd = 70 ;


function cart(btn , animatedChild , price){

	var btnTxt = $(btn).text();

	if (btnTxt == 'buy') {
		$(animatedChild).animate({
			marginLeft : '897px'
		} , 1500 , function(){
			$(btn).text('sell	');
		});

		// product count
		var count = Number($('.pNum').text());
		$('.pNum').text(count + 1);

		// products total price
		// unary operator +"1" --> 1
		var proPrice = +$('.totalPrice').text();
		$('.totalPrice').text(proPrice + price);


	}else {

		$(animatedChild).animate({
			marginLeft : 0
		} , 1500 , function(){
			$(btn).text('buy');
		});

		// product count
		var count = Number($('.pNum').text());
		$('.pNum').text(count - 1);

		// products total price
		// unary operator +"1" --> 1
		var proPrice = +$('.totalPrice').text();
		$('.totalPrice').text(proPrice - price);
	}

}

$('.firstbtn').click(function(){
	cart('.firstbtn' , '.child-one' , _1st);
})
$('.secbtn').click(function(){
	cart('.secbtn' , '.child-two' , _2nd);
})
$('.trdbtn').click(function(){
	cart('.trdbtn' , '.child-three' , _3rd);
})