window.onload = function () {
	var nums = [1,2,5, 4];
	showmonths();
	alert(biggest(nums));
}

function square(num) {
	return num*num;
}

function even(num) {
	if(num%2 == 0) return true;
	else return false;
}
function factorial(num) {
	var res = 1;
	if (num == 0) return 0;
	for(var i = 1; i<=num; i++){
		res = res*i;
	}
	return res;
}
function random(){
	return Math.random()*99999999
}

function biggest(nums){
	var big = nums[0];
	for(var i = 1; i <nums.length; i++){
		if (nums[i] > big) big = nums[i];
	}
	return big;
}
function caller(){
	return random();
}
function showmonths(){
	var months = ["Gener", "Febrer", "Març"];
	console.log(months);
}