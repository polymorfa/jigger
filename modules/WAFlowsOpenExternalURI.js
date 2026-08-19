__d("WAFlowsOpenExternalURI", ["WAFlowsBridgeEvents", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			yield t({
				eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames.WAFlowsOpenURL,
				payload: { url: e.toString() },
				fallBackDataForWeb: {},
				hasCallback: !1
			});
		}), s.apply(this, arguments);
	}
	l.openExternalURI = e;
}), 98);
