import GreeterBase = require("greeter-base");

import $ = require("jquery");

class GreeterOne extends GreeterBase {

    start() {
        console.log("starting...");
        super.start();
    }

    log() {
        console.log($().jquery);
    }

}
export = GreeterOne;