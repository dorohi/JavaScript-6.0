const arr = [15, 1, 2, 3, 0, 12, 4];
let answerArr = [];

function findLeesRigt(arr){
	for (let i = 0; i < arr.length; i++) {
		let countLees = 0;
		for (let j = i + 1; j < arr.length; j++) {
			//console.log('i='+i+'j='+j);
			if (arr[i] > arr[j]) {
				countLees++;
			}
		}	
		answerArr.push(countLees);
	}
	console.log(answerArr);
}
findLeesRigt(arr);