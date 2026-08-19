__d("MawMpsCopPostprocessor", [
	"FBLogger",
	"MawMpsCop",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		name: "mps_cop",
		process: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					yield o("MawMpsCop").mpsCop().postProcessMessages({
						ctx: t,
						payloadList: e
					});
				} catch (e) {
					r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).mustfix("[MawMpsCopPostprocessor] Fail to handle UI posprocessor");
				}
				return new Map();
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})()
	};
	l.MpsCopPostProcessor = e;
}), 98);
