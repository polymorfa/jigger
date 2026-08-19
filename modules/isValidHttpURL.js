__d("isValidHttpURL", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = /^http(s)?:\/\/(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/i, l = /^https:\/\/(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/i;
	function s(t, n) {
		return n === void 0 && (n = !1), t.match(n ? l : e) !== null;
	}
	i.default = s;
}), 66);
