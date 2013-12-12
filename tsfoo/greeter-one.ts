import GreeterBase = require("greeter-base");
class GreeterOne extends GreeterBase {

	start() {
		console.log("starting...");
		super.start();
	}

}
export = GreeterOne;