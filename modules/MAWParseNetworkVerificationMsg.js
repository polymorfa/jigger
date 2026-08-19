__d("MAWParseNetworkVerificationMsg", ["MAWMessageDropError", "WALogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		throw o("WALogger").EXPECTED_ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Web does not support network verification code"]))), new (o("MAWMessageDropError")).MAWMessageDropError("Web does not support network verification");
	}
	l.parseNetworkVerificationMsg = s;
}), 98);
