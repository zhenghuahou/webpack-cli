export function add() {
	var sum = 0, i = 0, args = arguments, l = args.length;
	console.log(' add fn');
	while (i < l) {
		sum += args[i++];
	}
	return sum;
}

export function multiply() {
	var product = 1, i = 0, args = arguments, l = args.length;
	console.log(' multiply fn');
	while (i < l) {
		product *= args[i++];
	}
	return product;
}

function test(){
	console.log(' test fn');
}
export function list() {
	console.log(' list fn!!!');
	return Array.from(arguments);
}