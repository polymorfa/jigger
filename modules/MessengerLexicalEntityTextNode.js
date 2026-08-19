__d("MessengerLexicalEntityTextNode", ["FBLogger", "Lexical"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.getEntity = function() {
			throw r("FBLogger")("messenger_comet").mustfixThrow("CometMessengerLexicalEntityTextNode does not implement getEntity");
		}, t;
	})(o("Lexical").TextNode);
	function s(t) {
		return t instanceof e;
	}
	l.MessengerLexicalEntityTextNode = e, l.isMessengerLexicalEntityTextNode = s;
}), 98);
