function decimalToBinary(decimal) {
  // Initialize an empty binary string
  let binary = '';

  // Convert decimal to binary
  while (decimal > 0) {
    // Get the remainder when dividing by 2
    let remainder = decimal % 2;

    // Add the remainder to the binary string
    binary = remainder + binary;

    // Update the decimal by dividing by 2
    decimal = Math.floor(decimal / 2);
  }

  // Return the binary representation
  return binary;
// // function threeSum(arr, target) {


// // write your code here
// 	function decimalToBinary(num){
//   if(num===0) return '0';
// 	const binary=' ';

// 	while(n>0){
// 		binary=(num%2)+ binary;
// 		num=math.floor(num/2);
// 	}
// 	return binary;
// }
// // console.log(decimalToBinary);


// // module.exports = threeSum;


