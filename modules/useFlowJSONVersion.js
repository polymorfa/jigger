__d("useFlowJSONVersion", [
	"WAMFlowsFlowProvider.react",
	"react",
	"tryParseJSONMixed"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useMemo;
	function u(e) {
		var t = s(function() {
			if (e != null) {
				var t, n = r("tryParseJSONMixed")(e);
				return n == null || n.version == null ? null : (t = n == null ? void 0 : n.version) != null ? t : null;
			}
			return null;
		}, [e]);
		return o("WAMFlowsFlowProvider.react").getFlowsRelayVersion(t);
	}
	l.default = u;
}), 98);
