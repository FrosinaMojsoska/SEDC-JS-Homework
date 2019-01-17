function string(word) {
	let result = [''];
	let  i, j;
	for (i in word) {
		//    i	   word([i]) 	
		//1) i=0 ->  d (word[1])
		//2) i=1 ->  0 
		//3) i=2 ->  g
		for (j in result) {
			//1) j=0 -> result=[" ",'d]--->(" " + word[0])
			//2) result before result=[" ", d] -> j[0]=' ',j[1]="d"
			// result after j[0]-> result(' ','d','o') -->result.push(j[0]=' '+i[1]='o')-->'o'
			// result after j[1] -> result('','d','o','do')-->result.push(j[1]='d'+i[1]='0')-->'do'
			//3) result before : result=['','d','o','do'] ->j[0]='' j[1]='d' j[2]='o' j[3]='do'
			//result after j[0]->reuslt ('','d','o','do','g')-->result.push(j[0]=''+i[2]='g')-->'g'
			//result after j[1]->result('','d','o','do','g','dg'))-->result.push(j[1]='d'+i[2]='g')-->'g'
			//result after j[2]->result('','d','o','do','g','dg','og'))-->result.push(j[2]='o'+i[2]='g')-->'og'
			//result after j[3]->result('','d','o','do','g','dg','og','dog'))-->result.push(j[3]='do'+i[2]='g')-->'dog'
			result.push(result[j] + word[i]);
		}
	}
	return result.splice(1,result.length);
}
console.log(string('dog'));
console.log(string('abcd'));

