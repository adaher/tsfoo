/// <reference path="../vendor/jquery.d.ts" />

import GreeterOne = require("greeter-one");
import $ = require("jquery");

$(() => {
    var el = $('#content')[0];
	var greeter = new GreeterOne(el);
    greeter.start();
});
