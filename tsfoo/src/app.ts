/// <reference path="../vendor/jquery.d.ts" />

// The compiler gets the type information for the jquery module from
// an "ambient external module declaration" contained in jquery.d.ts
// referenced with the reference tag above.
// Read more: https://typescript.codeplex.com/wikipage?title=Modules%20in%20TypeScript

import GreeterOne = require("greeter-one");
import $ = require("jquery");

$(() => {
    var el = $('#content')[0];
    var greeter = new GreeterOne(el);
    greeter.start();
});
