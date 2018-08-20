// 1. Based on array ['a','b','c','a', 'c', 'c' ];
// 2. Return expected ['b']

// By Recursion pattern

// function rec(arr, length) {
// 	const v1 = arr[0];
// 	const l2 = arr.filter( x => x !== v1 );
// 	if (length && arr.length === l2.length + 1) {
// 		return rec([ ...l2, v1 ], length -1 )
// 	} else if (length) {
// 		return rec([...l2], length - 1 )
// 	} else {
// 		return arr.reverse()
// 	}

// }
// // var arr = ['a','b','c','a', 'c', 'c' , 'd' ];
// // rec(arr , arr.length)


// // By Reduce Method
// var fn = (list) => list.reduce((acc , item) => (
//   { 
//     ...acc , 
//     [item]: Object.keys(acc).indexOf(item) > -1  && acc[item] + 1 || 1  
//   }) 
  // , {});
// var counts = fn(['a','b','c','a', 'c' , 'c', 'd', 'd', 'd' ])
// Object.keys(counts).filter( item => counts[item] === 1);
