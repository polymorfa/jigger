__d("EBInitializeMinosDb", [
	"EBMinosDb",
	"EBMinosLogger",
	"FBLogger",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("EBMinosLogger").minosLogger.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Initialize Minos Dev DB"])));
			try {
				yield o("EBMinosDb").makeEBMinosDb();
			} catch (e) {
				r("FBLogger")("wmi_minos").catching(r("getErrorSafe")(e)).mustfix("Runtime error in initializeMinosDb");
			}
		}), u.apply(this, arguments);
	}
	l.initializeMinosDb = s;
}), 98);
