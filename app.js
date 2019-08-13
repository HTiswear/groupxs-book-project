const express = require('express');
const app = express();
const util = require('util');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req, res) {
			
			var books = req.query;

			let booksTotal = parseInt(books.book1,10) + parseInt(books.book2,10) + parseInt(books.book3,10) + parseInt(books.book4,10) + parseInt(books.book5,10);
			var currentBooks = 0;
			
			var setArray = [];
			while(currentBooks < booksTotal){
				var setTotal = 0;
				if(books.book1 > 0){
					books.book1 = books.book1 -1;
					currentBooks = currentBooks + 1;
					setTotal = setTotal+ 1;
				}
				if(books.book2 > 0){
					books.book2 = books.book2 -1;
					currentBooks = currentBooks + 1;
					setTotal = setTotal+ 1;
				}
				if(books.book3 > 0){
					books.book3 = books.book3 -1;
					currentBooks = currentBooks + 1;
					setTotal = setTotal+ 1;
				}
				if(books.book4 > 0){
					books.book4 = books.book4 -1;
					currentBooks = currentBooks + 1;
					setTotal = setTotal+ 1;
				}
				if(books.book5 > 0){
					books.book5 = books.book5 -1;
					currentBooks = currentBooks + 1;
					setTotal = setTotal+ 1;
				}
				setArray.push(setTotal);				
			}
			

			
			let calcResults = calcSet(setArray);
			
			res.send({
				"totalCost" : calcResults
			});
});

function calcSet(setArray){
	var runningTotal = 0.00;
	const bookPrice = 8.00;
	for(var counter = 0; counter < setArray.length; counter++){
		var discount = 0;
		switch(setArray[counter]) {
			case 2:
			  discount = .05;
			  break;
			case 3:
			  discount = .1;
			  break;
			case 4:
			  discount = .2;
			  break;
			case 5:
			  discount = .25;
			break;
			default:
			  discount = 0;
		  }
		  var subTotal = setArray[counter] * bookPrice;
		  runningTotal = runningTotal + (subTotal - (subTotal * discount));
			
	};
	return runningTotal;
}

app.listen(3001, () => console.log('Harry Potter is ready on port 3001'));