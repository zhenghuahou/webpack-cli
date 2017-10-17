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
	var aa = 123;
	console.log(' test fn!!!');
}

// test();//压缩后代码包含test代码,如果此行被注释掉，则压缩的代码不包含test 函数代码
export function list() {
	console.log(' list fn!!!');
	return Array.from(arguments);
}